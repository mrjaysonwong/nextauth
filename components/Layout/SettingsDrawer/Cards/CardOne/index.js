import {
  Box,
  Typography,
  CardContent,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { StyledDivider } from '../..';

export default function CardOne({ theme, handleChangeTheme }) {
  return (
    <Box
      sx={{
        bgcolor: '#1B2430',
        color: 'gray',
      }}
    >
      <CardContent>
        <Typography variant="body1" color="#ccc">
          Layout
        </Typography>
      </CardContent>
      <StyledDivider />
      <CardContent>
        <FormControl>
          <FormLabel sx={{ color: 'inherit' }}>Theme</FormLabel>
          <RadioGroup
            row
            aria-labelledby="row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={theme}
            onChange={handleChangeTheme}
          >
            <FormControlLabel
              value="light"
              control={<Radio sx={{ color: 'inherit' }} />}
              label="Light"
            />
            <FormControlLabel
              value="dark"
              control={<Radio sx={{ color: 'inherit' }} />}
              label="Dark"
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Box>
  );
}
