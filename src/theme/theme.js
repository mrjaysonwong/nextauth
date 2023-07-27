import {
  useState,
  useMemo,
  useEffect,
  useContext,
  useRef,
  createContext,
} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, useMediaQuery } from '@mui/material';
import SettingsDrawer from '@components/Layout/SettingsDrawer';
import { ThemeMode } from '@pages/_app';
import ColorModeContext from 'src/context/ColorModeContext';
import { useCookies, Cookies, CookiesProvider } from 'react-cookie';
import GetDesignTokens from 'styles/theme';

export const SettingsContext = createContext();

export default function MuiThemeProvider({ children }) {
  const contextValue = useContext(ThemeMode);

  const { themeSetting, fontSetting } = contextValue;

  const [mode, setMode] = useState(themeSetting || 'light');
  const [font, setFont] = useState(fontSetting || 'Poppins');

  const [cookies, setCookies] = useCookies([
    'themePreference',
    'fontPreference',
  ]);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // checking if the environment is a browser or not
  const isBrowser = typeof window !== 'undefined';

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  useEffect(() => {
    // initial theme mode on first visit
    if (prefersDarkMode && !cookies.themePreference) {
      setMode('dark');
    }
  }, [prefersDarkMode, cookies.themePreference]);

  // persist the value of firstUpdate across multiple renders, so that the value of firstUpdate will not be reset to its initial value of true after each render.
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    // secure for https only
    setCookies('themePreference', mode, { path: '/', secure: true });
    setCookies('fontPreference', font, { path: '/', secure: true });
  }, [mode, font, setCookies]);

  // // update and persist font family
  useEffect(() => {
    const fontSetting = cookies.fontPreference;
    if (fontSetting) {
      setFont(fontSetting);
    }
  }, [cookies.fontPreference]);

  const handleChangeTheme = (e) => {
    const selectedTheme = e.target.value;
    setMode(selectedTheme);
  };

  const handleChangeFont = (e) => {
    const selectedFont = e.target.value;
    setFont(selectedFont);
  };

  const theme = useMemo(
    () => createTheme(GetDesignTokens(mode, font)),
    [mode, font]
  );

  const settingsValue = {
    mode,
    handleChangeTheme,
    font,
    handleChangeFont,
  };

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <SettingsContext.Provider value={settingsValue}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <CookiesProvider
              cookies={isBrowser ? undefined : new Cookies(cookies)}
            >
              {children}
              <SettingsDrawer />
            </CookiesProvider>
          </ThemeProvider>
        </SettingsContext.Provider>
      </ColorModeContext.Provider>
    </>
  );
}
