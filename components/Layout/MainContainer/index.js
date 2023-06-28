import { styled } from '@mui/system';
import { Box } from '@mui/material';

const StyledBox = styled(Box)({
  padding: '0 1rem',
  height: '100vh',
});
5;

export default function MainContainer({ children }) {
  return (
    <>
      <StyledBox>{children}</StyledBox>
    </>
  );
}
