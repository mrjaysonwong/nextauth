import { useContext } from 'react';
import {
  CardContent,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Divider,
  Box,
  Typography,
} from '@mui/material';
import { SettingsContext } from '@components/Layout/SettingsDrawer/index';

export default function CardOne() {
  const settingsValue = useContext(SettingsContext);
  const mode = settingsValue.mode;
  const handleChangeTheme = settingsValue.handleChangeTheme;

  return (
    <Box>
      <CardContent>
        <Typography>Layout</Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <FormControl>
          <FormLabel>Theme</FormLabel>
          <RadioGroup
            row
            aria-labelledby="row-radio-buttons-group-label-theme"
            name="row-radio-buttons-group"
            value={mode}
            onChange={handleChangeTheme}
          >
            <FormControlLabel
              value="light"
              control={<Radio />}
              label="Light"
              aria-label="light mode"
            />
            <FormControlLabel
              value="dark"
              control={<Radio />}
              label="Dark"
              aria-label="dark mode"
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Box>
  );
}
