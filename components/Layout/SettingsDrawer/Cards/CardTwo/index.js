import { useContext } from 'react';
import {
  CardContent,
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  Divider,
  Box,
  Typography,
} from '@mui/material';
import { SettingsContext } from 'src/theme/theme';

export default function CardTwo() {
  const settingsValue = useContext(SettingsContext);
  const { font, handleChangeFont } = settingsValue;

  return (
    <Box>
      <CardContent>
        <Typography>Font Family</Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <FormControl>
          <RadioGroup
            aria-labelledby="fontfamily-radio-buttons-group-label"
            name="fontfamily-radio-buttons-group"
            value={font}
            onChange={handleChangeFont}
          >
            <FormControlLabel
              value="Roboto"
              control={<Radio />}
              label="Roboto"
            />
            <FormControlLabel
              value="Poppins"
              control={<Radio />}
              label="Poppins"
            />
            <FormControlLabel
              value="Montserrat"
              control={<Radio />}
              label="Montserrat"
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Box>
  );
}
