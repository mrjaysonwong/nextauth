import { useState, useEffect, useMemo } from 'react';
import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SessionProvider } from 'next-auth/react';
import SettingsDrawer from '@components/Layout/SettingsDrawer';
import MainContainer from '@components/Layout/MainContainer';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const defaultFont = 'Poppins';
  const [font, setFont] = useState(defaultFont);

  const defaultTheme = 'light';
  const [themeMode, setThemeMode] = useState(defaultTheme);

  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${themeMode})`);

  // const theme = createTheme({
  //   typography: {
  //     fontFamily: `${font}`,
  //   },
  // });

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: `${font}`,
        },
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [font, prefersDarkMode]
  );

  useEffect(() => {
    const storedFont = localStorage.getItem('selectedFont');
    if (storedFont) {
      setFont(storedFont);
    }
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setThemeMode(storedTheme);
    }
  }, []);

  const handleChangeFont = (event) => {
    const font = event.target.value;
    setFont(font);
    localStorage.setItem('selectedFont', font);
  };

  return (
    <SessionProvider session={session}>
      <MainContainer theme={themeMode}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <SettingsDrawer
            font={font}
            handleChangeFont={handleChangeFont}
            themeMode={themeMode}
            setThemeMode={setThemeMode}
          />
        </ThemeProvider>
      </MainContainer>
    </SessionProvider>
  );
}

export default MyApp;
