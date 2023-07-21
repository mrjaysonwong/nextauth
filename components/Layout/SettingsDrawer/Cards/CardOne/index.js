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

export default function CardOne({ themeMode, handleChangeTheme }) {
  return (
    <Box>
      <CardContent>
        <Typography>Layout</Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <FormControl>
          <FormLabel sx={{ color: 'inherit' }}>Theme</FormLabel>
          <RadioGroup
            row
            aria-labelledby="row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={themeMode}
            onChange={handleChangeTheme}
          >
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Box>
  );
}
