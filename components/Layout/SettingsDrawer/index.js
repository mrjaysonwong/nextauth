import { useState } from 'react';
import { Box, Drawer } from '@mui/material';
import SettingsIcon from '@components/Layout/SettingsIcon';
import {
  StyledIconButton,
  StyledDrawerList,
  StyledCard,
} from './StyledComponents';
import CardOne from './Cards/CardOne';
import CardTwo from './Cards/CardTwo';

export default function SettingsDrawer({ font, handleChangeFont }) {
  const [state, setState] = useState({
    right: false,
  });

  const [themeMode, setThemeMode] = useState('dark');

  const handleChangeTheme = (event) => {
    setThemeMode(event.target.value);
  };

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(anchor, true)}>
      <StyledDrawerList>
        <StyledCard>
          <CardOne
            themeMode={themeMode}
            handleChangeTheme={handleChangeTheme}
          />
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
