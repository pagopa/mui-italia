import MuiChip, { ChipProps } from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';
import { cloneElement, FC } from 'react';

/**
 * This component resolves an accessibility issue with the deletable version of the Chip component.
 * When the Chip component has the onDelete property, it assumes the role button and a delete icon appears.
 * Whitout the onClick property the components is a button, but clicking on it nothing happens.
 * This leads to an accessiblity problems, because we have a button that does nothing and a delete icon that isn't reachable.
 * With this component we are going to remove the role button attribute.
 */
const Chip: FC<ChipProps> = (props) => {
  const { onDelete, onClick, deleteIcon, sx, label, ...other } = props;

  // If onClick is undefined and onDelete is defined, we are in the case of deletable Chip
  const isDeletableOnly = onDelete && !onClick;

  if (isDeletableOnly) {
    const AccessibileDeleteIcon = deleteIcon ? (
      // If we a custom icon, we must clone it and add accessibility properties
      cloneElement(deleteIcon as React.ReactElement, {
        tabIndex: 0,
        role: 'button',
        'aria-label': `Delete ${label}`,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            onDelete?.(e as any);
          }
        },
      })
    ) : (
      // Otherwise we use the default icon
      <CancelIcon
        tabIndex={0}
        role="button"
        aria-label={`Delete ${label}`}
        style={{ cursor: 'pointer' }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            onDelete?.(e as any);
          }
        }}
      />
    );
    // render a component without those properties that are linked to a button
    return (
      <MuiChip
        label={label}
        onDelete={onDelete}
        tabIndex={-1}
        role={undefined}
        sx={{
          cursor: 'default',
          ...sx,
          '& .MuiChip-deleteIcon': {
            cursor: 'pointer',
          },
        }}
        deleteIcon={AccessibileDeleteIcon}
        {...other}
      />
    );
  }

  // Standar case: we render the default component
  return (
    <MuiChip
      sx={sx}
      label={label}
      deleteIcon={deleteIcon}
      onClick={onClick}
      onDelete={onDelete}
      {...other}
    />
  );
};

export default Chip;
