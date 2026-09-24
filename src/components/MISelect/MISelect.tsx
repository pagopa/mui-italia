import { KeyboardArrowDown } from '@mui/icons-material';
import { Select as MuiSelect, type SelectProps, styled } from '@mui/material';
import { forwardRef } from 'react';

export type MISelectProps = Omit<
  SelectProps,
  | 'autoWidth'
  | 'classes'
  | 'defaultOpen'
  | 'defaultValue'
  | 'displayEmpty'
  | 'IconComponent'
  | 'input'
  | 'inputProps'
  | 'MenuProps'
  | 'native'
  | 'renderValue'
  | 'SelectDisplayProps'
  | 'sx'
  | 'variant'
  | 'components'
  | 'componentsProps'
  | 'color'
  | 'fullWidth'
  | 'renderSuffix'
  | 'rows'
  | 'minRows'
  | 'maxRows'
  | 'endAdornment'
  | 'inputComponent'
  | 'disableInjectingGlobalStyles'
  | 'margin'
  | 'multiline'
  | 'size'
  | 'slots'
  | 'slotProps'
  | 'type'
  | 'disableUnderline'
>;

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  borderRadius: theme.shape.radius[8],
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.colors.neutral.grey[650],
  },
  '& .MuiSelect-icon': {
    color: theme.colors.neutral.black,
  },
  '&.Mui-focused ': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.colors.blue[500],
    },
    '& .MuiSelect-icon': {
      color: theme.colors.blue[500],
    },
  },
  '&.Mui-error': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.colors.error[600],
    },
  },
}));

const MISelect = forwardRef<HTMLDivElement, MISelectProps>((props, ref) => (
  <StyledSelect ref={ref} {...props} IconComponent={KeyboardArrowDown} />
));

MISelect.displayName = 'MISelect';

export default MISelect;
