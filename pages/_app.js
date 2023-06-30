import { useState } from 'react';
import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from 'next-auth/react';
import SettingsDrawer from '@components/Layout/SettingsDrawer';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const defaultFont = 'Poppins';
  const [font, setFont] = useState(defaultFont);

  const theme = createTheme({
    typography: {
      fontFamily: `${font}`,
    },
  });

  const handleChangeFont = (event) => {
    setFont(event.target.value);
  };

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <SettingsDrawer font={font} handleChangeFont={handleChangeFont} />
    </SessionProvider>
  );
}

export default MyApp;
