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

export default function CardTwo({ font, handleChangeFont }) {
  return (
    <Box>
      <CardContent>
        <Typography>Font Family</Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <FormControl>
          <RadioGroup
            aria-labelledby="font-radio-buttons-group-label"
            name="font-radio-buttons-group"
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
