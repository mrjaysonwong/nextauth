import {
  Box,
  List,
  Typography,
  IconButton,
  Card,
  Divider,
  Radio,
} from '@mui/material';
import { styled } from '@mui/system';

export const StyledIconButton = styled(IconButton)({
  position: 'fixed',
  borderRadius: '50% 50% 10% 50%',
  backgroundColor: '#4942E4',
  top: '10rem',
  right: '1rem',
  ':hover': {
    backgroundColor: '#241dad',
  },
});

export const StyledDrawerList = styled(List)({
  minHeight: '100vh',
  padding: '1rem',
  backgroundColor: '#1B2430',
  ' .MuiPaper-root': { border: '1px solid #344254' },
});

export const StyledCard = styled(Card)({
  ' :not(:last-child)': {
    marginBottom: '1rem',
  },
});

export const StyledDivider = styled(Divider)({
  backgroundColor: '#344254',
});

export const StyledBox = styled(Box)({
  backgroundColor: '#1B2430',
  color: 'gray',
});

export const StyledTypography = styled(Typography)({
  color: '#ccc',
});

export const StyledRadio = styled(Radio)({
  color: 'inherit',
});
