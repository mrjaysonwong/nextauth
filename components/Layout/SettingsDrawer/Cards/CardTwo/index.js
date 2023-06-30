import {
  CardContent,
  FormControlLabel,
  FormControl,
  RadioGroup,
} from '@mui/material';
import {
  StyledBox,
  StyledTypography,
  StyledDivider,
  StyledRadio,
} from '../../StyledComponents';

export default function CardTwo({ font, handleChangeFont }) {
  return (
    <StyledBox>
      <CardContent>
        <StyledTypography>Font Family</StyledTypography>
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
              value="Roboto"
              control={<StyledRadio />}
              label="Roboto"
            />
            <FormControlLabel
              value="Poppins"
              control={<StyledRadio />}
              label="Poppins"
            />
            <FormControlLabel
              value="Montserrat"
              control={<StyledRadio />}
              label="Montserrat"
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </StyledBox>
  );
}
