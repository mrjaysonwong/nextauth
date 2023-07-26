import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const GetDesignTokens = (mode, font) => ({
  palette: {
    mode,
    ...(mode === 'light' ? darkTheme : lightTheme),
  },
  typography: {
    fontFamily: `${font}, sans-serif`,
  },
});

export default GetDesignTokens;
