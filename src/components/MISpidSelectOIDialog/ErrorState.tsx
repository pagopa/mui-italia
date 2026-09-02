import { IllusMIError } from '@illustrations/MIError';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
  description: string;
  closeButtonLabel: string;
  onClose: () => void;
};

const ErrorState: React.FC<Props> = ({ title, description, closeButtonLabel, onClose }) => {
  const theme = useTheme();

  return (
    <Stack
      spacing={3}
      sx={{
        alignItems: 'center',
        textAlign: 'center',
        my: 8,
      }}
      data-testid="spid-select-error-state"
    >
      <IllusMIError size={56} />

      <Box>
        <Typography sx={{ color: theme.colors.neutral.black, fontWeight: 700, fontSize: '32px' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>

      <Button
        onClick={onClose}
        variant="contained"
        color="primary"
        data-testid="spid-select-error-state-close-button"
      >
        {closeButtonLabel}
      </Button>
    </Stack>
  );
};

export default ErrorState;
