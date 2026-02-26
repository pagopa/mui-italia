import MuiChip, { ChipProps } from '@mui/material/Chip';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FC } from 'react';

/**
 * This component resolves an accessibility issue with the deletable version of the Chip component.
 * When the Chip component has the onDelete property, it assumes the role button and a delete icon appears.
 * Whitout the onClick property the components is a button, but clicking on it nothing happens.
 * This leads to an accessiblity problems, because we have a button that does nothing and a delete icon that isn't reachable.
 * With this component we are going to remove the role button attribute.
 */
type CustomChipProps = Omit<ChipProps, 'color' | 'deleteIcon' | 'label'> & {
  label: string;
};

const DeletableChip: FC<CustomChipProps> = (props) => {
  const { onDelete, onClick, sx, label, 'aria-label': ariaLabel, ...other } = props;

  // If onClick is undefined and onDelete is defined, we are in the case of deletable Chip
  const isDeletableOnly = onDelete && !onClick;

  if (isDeletableOnly) {
    // render a component without those properties that are linked to a button
    return (
      <MuiChip
        label={label}
        onDelete={onDelete}
        tabIndex={-1}
        role={undefined}
        color="neutral"
        sx={{
          cursor: 'default',
          ...sx,
          '& .MuiChip-deleteIcon': {
            cursor: 'pointer',
          },
        }}
        deleteIcon={
          <CloseRoundedIcon
            tabIndex={0}
            role="button"
            aria-label={(ariaLabel ?? `Delete %s`).replace('%s', label)}
            style={{ cursor: 'pointer' }}
            aria-hidden={false}
            focusable={true}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                onDelete?.(e as any);
              }
            }}
            sx={{
              color: '#2962FF',
              backgroundColor: 'transparent',
              borderRadius: 0,
            }}
          />
        }
        {...other}
      />
    );
  }

  // Standard case: we render the default component
  return (
    <MuiChip
      sx={sx}
      label={label}
      deleteIcon={<CloseRoundedIcon />}
      onClick={onClick}
      onDelete={onDelete}
      color="neutral"
      {...other}
      aria-label={ariaLabel}
    />
  );
};

export default DeletableChip;
