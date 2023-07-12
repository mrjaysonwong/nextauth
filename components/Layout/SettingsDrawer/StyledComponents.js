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
});

export const StyledCard = styled(Card)(({ theme }) => ({
  ' :not(:last-child)': {
    marginBottom: '1rem',
  },
  backgroundColor: theme === 'dark' ? '#161b22' : '#fff',
  color: theme === 'dark' ? '#fff' : '#161b22',
  border: theme === 'dark' ? '1px solid rgba(128, 128, 128, 0.5)' : '',
}));

export const StyledDivider = styled(Divider)({
  backgroundColor: 'inherit',
});

export const StyledBox = styled(Box)({
  backgroundColor: 'inherit',
  border: '1px solid rgba(52, 66, 84, 0.2)',
});

export const StyledTypography = styled(Typography)({
  color: 'inherit',
});

export const StyledRadio = styled(Radio)({
  color: 'inherit',
});
