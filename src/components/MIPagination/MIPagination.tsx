import MuiPaginationItem from '@mui/material/PaginationItem';
import MuiPagination, { PaginationProps } from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/system';

type MIPaginationProps = Omit<
  PaginationProps,
  | 'color'
  | 'shape'
  | 'size'
  | 'sx'
  | 'variant'
  | 'classes'
  | 'renderItem'
  | 'siblingCount'
  | 'boundaryCount'
  | 'hideNextButton'
  | 'hidePrevButton'
  | 'showFirstButton'
  | 'showLastButton'
>;

const StyledPaginationItem = styled(MuiPaginationItem)(({ theme }) => ({
  background: 'transparent',
  color: theme.colors.neutral.black,
  padding: theme.spacing(1.5),
  height: theme.spacing(5.75),
  minWidth: theme.spacing(5),
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '22px',
  borderRadius: theme.shape.radius[8],
  '&:hover': {
    background: 'transparent',
    textDecoration: 'underline',
    color: theme.colors.blue[500],
  },
  '&.Mui-selected': {
    background: theme.colors.blue[500],
    color: theme.colors.neutral.white,
    '&:hover': {
      textDecoration: 'none',
      color: theme.colors.neutral.white,
      background: theme.colors.blue[500],
    },
    '&.Mui-disabled': {
      color: theme.colors.neutral.white,
      background: '#E8EBF1',
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
  '&.Mui-focusVisible': {
    background: 'transparent',
    outlineOffset: 0,
    outline: `2px solid ${theme.colors.blue[400]}`,
  },
  '& .MuiPaginationItem-icon': {
    color: theme.colors.blue[500],
  },
}));

const StyledPagination = styled(MuiPagination)({});

export const MIPagination: React.FC<MIPaginationProps> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledPagination
      siblingCount={0}
      renderItem={(item) => {
        if (isMobile) {
          const isNavButton = item.type === 'previous' || item.type === 'next';
          if (!isNavButton && !item.selected) {
            return null;
          }
        }
        return <StyledPaginationItem {...item} />;
      }}
      {...props}
    />
  );
};

export default MIPagination;
