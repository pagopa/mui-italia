import { styled } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => {
  return {
    height: '22px',
    lineHeight: '22px',
    fontWeight: 500,
    '& .MuiBreadcrumbs-li svg': {
      fontSize: '24px',
    },
    '& .MuiLink-root.MuiLink-underlineHover': {
      display: 'flex',
      marginTop: 0,
      marginBottom: 0,
      padding: 0,
      color: theme.colors.neutral.black,
      '&:hover': {
        color: theme.colors.blue[500],
        textDecoration: 'underline',
        cursor: 'pointer',
      },
    },
  };
});
