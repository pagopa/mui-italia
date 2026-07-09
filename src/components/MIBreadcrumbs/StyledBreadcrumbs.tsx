import { styled } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => {
  return {
    fontWeight: 500,
    '& .MuiBreadcrumbs-separator svg': {
      fontSize: "16px",
      color: theme.colors.neutral.black,
    },
    '& .MuiBreadcrumbs-li svg': {
      fontSize: "24px",
    },
    '& .MuiLink-root.MuiLink-underlineHover': {
      display: 'flex',
      marginTop: 0,
      marginBottom: 0,
      padding: 0,
      color: theme.colors.neutral.black,
      '&:hover:not(.MuiLink-disabled)': {
        color: theme.colors.blue[500],
        textDecoration: 'underline',
        cursor: 'pointer',
      },
      '&.MuiLink-disabled': {
        cursor: 'not-allowed',
        color: theme.colors.neutral.grey[450],
      },
    },
  };
});
