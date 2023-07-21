import { useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import MainContainer from '@components/Layout/MainContainer';
import SettingsDrawer from '@components/Layout/SettingsDrawer';

export default function MuiThemeProvider({ children }) {
  const [font, setFont] = useState('Poppins, Verdana');
  const [themeMode, setThemeMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: `${themeMode}`,
        },
        typography: {
          fontFamily: `${font}`,
        },
      }),
    [font, themeMode]
  );

  const handleChangeFont = (e) => {
    const selectedFont = e.target.value;
    setFont(selectedFont);
  };

  const handleChangeTheme = (e) => {
    const selectedTheme = e.target.value;
    setThemeMode(selectedTheme);
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
