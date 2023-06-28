import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  Typography,
  IconButton,
  Card,
  Divider,
} from '@mui/material';
import SettingsIcon from '@components/Layout/SettingsIcon';
import { styled } from '@mui/system';
import CardOne from './Cards/CardOne';
import CardTwo from './Cards/CardTwo';

const StyledIconButton = styled(IconButton)({
  position: 'fixed',
  borderRadius: '50% 50% 10% 50%',
  backgroundColor: '#4942E4',
  top: '10rem',
  right: '1rem',
  ':hover': {
    backgroundColor: '#241dad',
  },
});

const StyledDrawerList = styled(List)({
  minHeight: '100vh',
  padding: '1rem',
  backgroundColor: '#1B2430',
  ' .MuiPaper-root': { border: '1px solid #344254' },
});

const StyledCard = styled(Card)({
  ' :not(:last-child)': {
    marginBottom: '1rem',
  },
});

export const StyledDivider = styled(Divider)({
  backgroundColor: '#344254',
});

export default function SettingsDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const [theme, setTheme] = useState('dark');
  const [font, setFont] = useState('poppins');

  const handleChangeTheme = (event) => {
    setTheme(event.target.value);
  };
  const handleChangeFont = (event) => {
    setFont(event.target.value);
  };

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(anchor, true)}>
      <StyledDrawerList>
        <StyledCard>
          <CardOne theme={theme} handleChangeTheme={handleChangeTheme} />
        </StyledCard>
        <StyledCard>
          <CardTwo font={font} handleChangeFont={handleChangeFont} />
        </StyledCard>
      </StyledDrawerList>
    </Box>
  );

  return (
    <>
      <StyledIconButton onClick={toggleDrawer('right', true)}>
        <SettingsIcon />
      </StyledIconButton>

      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </>
  );
}
