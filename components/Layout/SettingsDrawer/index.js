import { useState } from 'react';
import { Box, Drawer } from '@mui/material';
import SettingsIcon from '@components/Layout/SettingsIcon';
import { StyledIconButton, StyledDrawerList, StyledCard } from './styled';
import CardOne from './Cards/CardOne';
import CardTwo from './Cards/CardTwo';
import { Tooltip } from '@mui/material';

export default function SettingsDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(anchor, true)}>
      <StyledDrawerList>
        <StyledCard>
          <CardOne />
        </StyledCard>
        <StyledCard>
          <CardTwo />
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
