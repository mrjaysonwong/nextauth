import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import MuiThemeProvider from 'src/theme';

function MyApp(props) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  return (
    <SessionProvider session={session}>
      <MuiThemeProvider>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
