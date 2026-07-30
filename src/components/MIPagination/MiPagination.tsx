import MuiPaginationItem, { PaginationItemProps } from '@mui/material/PaginationItem';
import MuiPagination, { PaginationProps } from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import { maxWidth } from '@mui/system';

interface MIPaginationProps extends PaginationProps {}

const StyledPaginationItem = styled(MuiPaginationItem)(({ theme }) => ({
  background: 'transparent',
  color: theme.colors.neutral.black,
  padding: '12px',
  height: '46px',
  minWidth: '40px',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '22px',
  '&.MuiPaginationItem-rounded': {
    borderRadius: '8px',
  },
  '&:hover': {
    background: 'transparent',
    textDecoration: 'underline',
  },
  '&.Mui-selected': {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  '&.MuiPaginationItem-previousNext': {
    width: '40px',
    height: '40px',
    border: `2px solid #E8EBF1`,
    '&.Mui-disabled': {
      display: 'none',
    },
  },
  '&.MuiPaginationItem-colorPrimary': {
    '&:hover': {
      color: theme.colors.blue[500],
    },
    '&.Mui-selected': {
      background: theme.colors.blue[500],
      '&.Mui-disabled': {
        color: theme.colors.neutral.white,
        background: '#E8EBF1',
      },
      '&:hover': {
        color: theme.colors.neutral.white,
        textDecoration: 'none',
      },
    },
    '&.Mui-focusVisible': {
      background: 'transparent',
      outlineOffset: 0,
      outline: `2px solid ${theme.colors.blue[400]}`,
    },
    '& .MuiPaginationItem-icon': {
      color: theme.colors.blue[500],
    },
  },
}));

const StyledPagination = styled(MuiPagination)({});

export const MIPagination: React.FC<MIPaginationProps> = (props) => {
  return <StyledPagination renderItem={(item) => <StyledPaginationItem {...item} />} {...props} />;
};

export default MIPagination;
