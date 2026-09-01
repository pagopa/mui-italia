import { styled } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { pxToRem } from '@theme';

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  '& .MIBreadcrumbItem-current': {
    color: theme.colors.neutral.grey[700],
  },
  fontWeight: 500,
  '& .MuiBreadcrumbs-separator': {
    margin: '0 6px',
  },
  '& .MuiBreadcrumbs-separator svg': {
    fontSize: pxToRem(16),
    color: theme.colors.neutral.black,
  },
  '& .MuiBreadcrumbs-li svg': {
    fontSize: pxToRem(24),
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
  },
  '& .MuiLink-root .MIBreadcrumbBackIcon': {
    margin: 0,
  },
}));
