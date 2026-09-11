import type { ReactNode } from 'react';

import { Box, ListItemIcon, ListItemText, Typography } from '@mui/material';

import { isPrimitiveNode } from '../../utils/children.utility';
import type { MITableListItemFieldProps } from './types';

const renderLabel = (content: ReactNode) =>
  isPrimitiveNode(content) ? (
    <Typography variant="caption" sx={{ overflowWrap: 'anywhere' }}>
      {content}
    </Typography>
  ) : (
    content
  );

const renderValue = (content: ReactNode) =>
  isPrimitiveNode(content) ? (
    <Typography variant="caption-semibold" sx={{ overflowWrap: 'anywhere' }}>
      {content}
    </Typography>
  ) : (
    content
  );

const MITableListItemField = ({ children, label, icon, sx }: MITableListItemFieldProps) => (
  <Box
    display="grid"
    gridTemplateColumns={icon ? 'auto minmax(0, 1fr)' : 'minmax(0, 1fr)'}
    gridTemplateRows={{ xs: 'auto auto', md: 'subgrid' }}
    gridRow={{ xs: 'auto', md: '1 / span 2' }}
    columnGap={1}
    minWidth={0}
    sx={sx}
  >
    {icon && (
      <Box gridRow="1 / span 2" alignSelf="center">
        <ListItemIcon
          sx={{
            minWidth: 0,
            color: (theme) => theme.colors.neutral.grey[300],
          }}
        >
          {icon}
        </ListItemIcon>
      </Box>
    )}

    <ListItemText
      primary={renderLabel(label)}
      secondary={renderValue(children)}
      disableTypography
      sx={{
        gridColumn: icon ? '2' : '1',
        gridRow: '1 / span 2',
        display: 'grid',
        gridTemplateRows: {
          xs: 'auto auto',
          md: 'subgrid',
        },
        rowGap: {
          xs: 0.5,
          md: 0,
        },
        minWidth: 0,
        m: 0,
      }}
    />
  </Box>
);

export default MITableListItemField;
