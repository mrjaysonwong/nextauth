import { useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import MainContainer from '@components/Layout/MainContainer';
import SettingsDrawer from '@components/Layout/SettingsDrawer';

export default function MuiThemeProvider({ children }) {
  const [font, setFont] = useState('Poppins');
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setThemeMode(storedTheme || themeMode);
  }, [setThemeMode, themeMode]);

  useEffect(() => {
    const storedFont = localStorage.getItem('selectedFont');
    setFont(storedFont || font);
  }, [setFont, font]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: `${themeMode}`,
        },
        typography: {
          fontFamily: `${font}, sans-serif`,
        },
      }),
    [font, themeMode]
  );

  const handleChangeFont = (e) => {
    const selectedFont = e.target.value;
    setFont(selectedFont);
    localStorage.setItem('selectedFont', selectedFont);
  };

  const handleChangeTheme = (e) => {
    const selectedTheme = e.target.value;
    setThemeMode(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <MainContainer>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <SettingsDrawer
            font={font}
            handleChangeFont={handleChangeFont}
            themeMode={themeMode}
            handleChangeTheme={handleChangeTheme}
          />
        </ThemeProvider>
      </MainContainer>
    </Box>
  );
}
