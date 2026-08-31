'use client';

import { Box, Button, Stack, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { ReactNode } from 'react';

type TOSAgreementProps = {
  productName: string;
  description: ReactNode | string;
  onConfirm: VoidFunction;
  children?: ReactNode;
  sx?: SxProps;
  confirmBtnDisabled?: boolean;
  confirmBtnError?: boolean;
  confirmBtnLabel?: string;
};

export function TOSAgreement({
  productName,
  description,
  children,
  onConfirm,
  sx,
  confirmBtnDisabled,
  confirmBtnError = false,
  confirmBtnLabel = 'Accedi',
}: TOSAgreementProps) {
  const isDescriptionComponentAString = typeof description === 'string';

  return (
    <Stack
      sx={{
        py: { xs: 4, lg: 16 },
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      <Stack sx={{ maxWidth: 680, mx: 'auto', px: { xs: 3, lg: 4 } }} spacing={{ xs: 4, lg: 8 }}>
        <Stack sx={{ textAlign: 'center' }} spacing={1}>
          <Typography variant="h3">{productName}</Typography>
          <Typography component={isDescriptionComponentAString ? 'p' : 'span'}>
            {description}
          </Typography>
        </Stack>
        {children && <Box>{children}</Box>}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            onClick={onConfirm}
            variant="contained"
            disabled={confirmBtnDisabled}
            sx={
              confirmBtnError
                ? {
                    bgcolor: 'error.main',
                    color: '#FFF',
                    '&&:hover': {
                      bgcolor: 'error.main',
                    },
                  }
                : undefined
            }
          >
            {confirmBtnLabel}
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
