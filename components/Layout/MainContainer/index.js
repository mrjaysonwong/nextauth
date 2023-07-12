import { styled } from '@mui/system';
import { Box } from '@mui/material';

// const StyledBox = styled(Box)({
//   padding: '0 1rem',
//   minHeight: '100vh',
// });
const StyledBox = styled(Box)(({ theme }) => ({
  padding: '0 1rem',
  minHeight: '100vh',
  backgroundColor: theme === 'dark' ? '#161b22' : '#fff',
  color: theme === 'dark' ? '#fff' : '#000',
}));

export default function MainContainer({ children, theme }) {
  return <StyledBox theme={theme}>{children}</StyledBox>;
}
