import {
  Box,
  Typography,
  CardContent,
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
} from '@mui/material';
import { StyledDivider } from '../..';

export default function CardTwo({ font, handleChangeFont }) {
  return (
    <Box sx={{ bgcolor: '#1B2430', color: 'gray' }}>
      <CardContent>
        <Typography variant="body1" color="#ccc">
          Font Family
        </Typography>
      </CardContent>
      <StyledDivider />
      <CardContent>
        <FormControl>
          <RadioGroup
            aria-labelledby="font-radio-buttons-group-label"
            name="font-radio-buttons-group"
            value={font}
            onChange={handleChangeFont}
          >
            <FormControlLabel
              value="roboto"
              control={<Radio />}
              label="Roboto"
            />
            <FormControlLabel
              value="poppins"
              control={<Radio />}
              label="Poppins"
            />
            <FormControlLabel value="arial" control={<Radio />} label="Arial" />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Box>
  );
}
