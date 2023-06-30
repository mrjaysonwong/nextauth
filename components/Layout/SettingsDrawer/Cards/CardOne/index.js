import {
  CardContent,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import {
  StyledBox,
  StyledTypography,
  StyledDivider,
  StyledRadio,
} from '../../StyledComponents';

export default function CardOne({ themeMode, handleChangeTheme }) {
  return (
    <StyledBox>
      <CardContent>
        <StyledTypography>Layout</StyledTypography>
      </CardContent>
      <StyledDivider />
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
            <FormControlLabel
              value="light"
              control={<StyledRadio />}
              label="Light"
            />
            <FormControlLabel
              value="dark"
              control={<StyledRadio />}
              label="Dark"
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </StyledBox>
  );
}
