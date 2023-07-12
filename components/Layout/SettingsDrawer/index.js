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
import { Tooltip } from '@mui/material';

export default function SettingsDrawer({
  font,
  handleChangeFont,
  themeMode,
  setThemeMode,
}) {
  const [state, setState] = useState({
    right: false,
  });

  // const [themeMode, setThemeMode] = useState('dark');

  const handleChangeTheme = (event) => {
    const theme = event.target.value;
    setThemeMode(theme);
    localStorage.setItem('theme', theme);
  };

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, bgcolor: themeMode === 'dark' ? '#161b22' : '#fff' }}
      onClick={toggleDrawer(anchor, true)}
    >
      <StyledDrawerList>
        <StyledCard theme={themeMode}>
          <CardOne
            themeMode={themeMode}
            handleChangeTheme={handleChangeTheme}
            setThemeMode={setThemeMode}
          />
        </StyledCard>
        <StyledCard theme={themeMode}>
          <CardTwo font={font} handleChangeFont={handleChangeFont} />
        </StyledCard>
      </StyledDrawerList>
    </Box>
  );

  return (
    <>
      <Tooltip title="Live Customize" placement="bottom" arrow>
        <StyledIconButton onClick={toggleDrawer('right', true)}>
          <SettingsIcon />
        </StyledIconButton>
      </Tooltip>

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
