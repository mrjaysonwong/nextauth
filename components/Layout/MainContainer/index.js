import { styled } from '@mui/system';
import { Box } from '@mui/material';

const StyledBox = styled(Box)({
  padding: '0 1rem',
  minHeight: '100vh',
});

export default function MainContainer({ children }) {
  return <StyledBox>{children}</StyledBox>;
}
