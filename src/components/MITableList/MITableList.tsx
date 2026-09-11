import { Children, cloneElement, isValidElement, type FC } from 'react';

import { List, styled, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { checkChildren } from 'utils/children.utility';

import MITableListItem from './MITableListItem';
import MITableListSkeleton from './MITableListSkeleton';
import type { MITableListItemProps, MITableListProps } from './types';

const StyledList = styled(List)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2.5),
  width: '100%',
}));

const MITableList: FC<MITableListProps> = ({
  children,
  columns,
  loading = false,
  slots,
  slotProps,
  localeText,
  sx,
}) => {
  const Skeleton = slots?.skeleton ?? MITableListSkeleton;

  let items;
  if (!loading) {
    checkChildren(children, [{ cmp: MITableListItem }], 'MITableList');
    items = Children.map(children, (child) => {
      if (!isValidElement<MITableListItemProps>(child)) {
        return child;
      }

      return cloneElement(child, {
        columns: child.props.columns ?? columns,
      });
    });
  }

  return (
    <>
      <Typography role="status" aria-live="polite" aria-atomic="true" sx={visuallyHidden}>
        {loading ? (localeText?.loadingLabel ?? 'Content loading, please wait...') : ''}
      </Typography>

      <StyledList disablePadding sx={sx} aria-busy={loading || undefined}>
        {loading ? (
          <Skeleton {...slotProps?.skeleton} cols={slotProps?.skeleton?.cols ?? columns?.length} />
        ) : (
          items
        )}
      </StyledList>
    </>
  );
};

export default MITableList;
