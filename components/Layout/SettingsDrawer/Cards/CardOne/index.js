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
import { SettingsContext } from 'src/theme/theme';

export default function CardOne() {
  const settingsValue = useContext(SettingsContext);
  const { mode, handleChangeTheme } = settingsValue;

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
