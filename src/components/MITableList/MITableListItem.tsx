import { Children } from 'react';

import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { Box, ListItem, Stack, styled } from '@mui/material';
import { MIPaper } from '@components/MIPaper';

import { checkChildren } from 'utils/children.utility';

import { ButtonNaked } from '../ButtonNaked';
import MITableListItemField from './MITableListItemField';
import type { MITableListItemProps } from './types';

const ItemContent = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  columnGap: 0,
  rowGap: theme.spacing(2),
  alignItems: 'start',
  minWidth: 0,

  [theme.breakpoints.up('md')]: {
    columnGap: theme.spacing(3),
    rowGap: theme.spacing(0.5),
  },
}));

const MITableListItem = ({
  children,
  columns,
  action,
  slots,
  slotProps,
  sx,
}: MITableListItemProps) => {
  checkChildren(children, [{ cmp: MITableListItemField }], 'MITableListItem');

  const fieldsCount = Children.count(children);

  if (columns && columns.length !== fieldsCount) {
    throw new Error(
      `MITableListItem: columns length (${columns.length}) must match fields count (${fieldsCount}).`
    );
  }

  const dataColumns = columns
    ? columns.map((column) => `minmax(0, ${column}fr)`).join(' ')
    : `repeat(${fieldsCount}, minmax(0, 1fr))`;

  const ActionButton = slots?.actionButton ?? ButtonNaked;
  const actionIcon = action?.icon === undefined ? <ArrowForwardIcon /> : action.icon;

  return (
    <ListItem disablePadding sx={[{ width: '100%' }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <MIPaper variant="outlined" padding={24} sx={{ width: '100%' }}>
        <ItemContent
          gridTemplateColumns={{
            xs: 'minmax(0, 1fr)',
            md: action ? `${dataColumns} max-content` : dataColumns,
          }}
          gridTemplateRows={{ xs: 'auto', md: 'auto auto' }}
        >
          {children}

          {action && (
            <Stack
              direction="row"
              justifyContent="flex-end"
              gridColumn={{ xs: '1', md: 'auto' }}
              gridRow={{ xs: 'auto', md: '1 / span 2' }}
              alignSelf="center"
              minWidth={0}
            >
              <ActionButton
                color="primary"
                {...slotProps?.actionButton}
                onClick={action.onClick}
                aria-label={action.ariaLabel}
                endIcon={actionIcon}
              >
                {action.content}
              </ActionButton>
            </Stack>
          )}
        </ItemContent>
      </MIPaper>
    </ListItem>
  );
};

export default MITableListItem;
