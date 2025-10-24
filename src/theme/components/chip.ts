import { palette } from '../foundations/colors';

export const chip = {
  default: {
    filled: { background: palette.blue[50], text: palette.blue[850] },
    outlined: { background: 'transparent', text: palette.blue[600], border: palette.blue[600] },
  },
  warning: {
    filled: { background: palette.warning[100], text: palette.warning[850] },
    outlined: {
      background: 'transparent',
      text: palette.warning[850],
      border: palette.warning[850],
    },
  },
  success: {
    filled: { background: palette.success[100], text: palette.success[850] },
    outlined: {
      background: 'transparent',
      text: palette.success[850],
      border: palette.success[850],
    },
  },
  error: {
    filled: { background: palette.error[100], text: palette.error[850] },
    outlined: { background: 'transparent', text: palette.error[600] },
  },
  highlighted: {
    filled: { background: palette.turquoise[50], text: palette.turquoise[850] },
    outlined: { background: 'transparent', text: palette.turquoise[850] },
  },
  neutral: {
    filled: { background: palette.neutral.grey[100], text: palette.neutral.black },
    outlined: {
      background: 'transparent',
      text: palette.neutral.black,
      border: palette.neutral.black,
    },
  },
};
