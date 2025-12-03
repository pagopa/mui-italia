import MuiChip, { ChipProps } from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';
import { FC } from 'react';

/**
 * This component resolves an accessibility issue with the deletable version of the Chip component.
 * When the Chip component has the onDelete property, it assumes the role button and a delete icon appears.
 * Whitout the onClick property the components is a button, but clicking on it nothing happens.
 * This leads to an accessiblity problems, because we have a button that does nothing and a delete icon that isn't reachable.
 * With this component we are going to remove the role button attribute.
 */
const Chip: FC<Exclude<ChipProps, 'deleteIcon' | 'label'> & { label: string }> = (props) => {
  const { onDelete, onClick, sx, label, ...other } = props;

  // If onClick is undefined and onDelete is defined, we are in the case of deletable Chip
  const isDeletableOnly = onDelete && !onClick;

  const ariaLabel = other['aria-label'] ?? `Delete %s`;

  if (isDeletableOnly) {
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
        deleteIcon={
          <CancelIcon
            tabIndex={0}
            role="button"
            aria-label={ariaLabel.replace('%s', label)}
            style={{ cursor: 'pointer' }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                onDelete?.(e as any);
              }
            }}
          />
        }
        {...other}
      />
    );
  }

  // Standar case: we render the default component
  return (
    <MuiChip
      sx={sx}
      label={label}
      deleteIcon={<CancelIcon />}
      onClick={onClick}
      onDelete={onDelete}
      {...other}
    />
  );
};

export default Chip;
