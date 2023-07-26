import { createContext } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'src/theme/createEmotionCache';
import MuiThemeProvider from 'src/theme/theme';
import parseCookies from 'utils/parseCookies';

export const ThemeMode = createContext();

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const {
    Component,
    themeSetting,
    fontSetting,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;

  const contextValue = {
    themeSetting,
    fontSetting,
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>NextAuth with Theme Preference</title>
      </Head>

      <SessionProvider session={session}>
        <CacheProvider value={emotionCache}>
          <ThemeMode.Provider value={contextValue}>
            <MuiThemeProvider>
              <Component {...pageProps} />
            </MuiThemeProvider>
          </ThemeMode.Provider>
        </CacheProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;

MyApp.getInitialProps = async ({ ctx }) => {
  let themeSetting;
  let fontSetting;
  if (ctx.req && ctx.req.headers.cookie) {
    const cookies = parseCookies(ctx);
    themeSetting = cookies.themePreference;
    fontSetting = cookies.fontPreference;
  }

  return {
    themeSetting,
    fontSetting,
  };
};
