import { colors } from '../foundations/colors';

const muiAccordion = {
  styleOverrides: {
    root: {
      border: `1px solid ${colors.neutral.grey[100]}`,
      boxShadow: 'none',
      padding: '24px',
      borderRadius: '8px',

      '&:first-of-type': {
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      },

      '&:last-of-type': {
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
      },

      '&:before': {
        display: 'none',
      },
    },
  },
};

export default muiAccordion;
