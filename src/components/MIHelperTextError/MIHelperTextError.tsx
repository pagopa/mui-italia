'use client';

import { ReportRounded as ReportRoundedIcon } from '@mui/icons-material';
import { Box } from '@mui/material';

import { MIFormHelperText, type MIFormHelperTextProps } from '../MIForm';

export type MIHelperTextErrorProps = MIFormHelperTextProps;

const MIHelperTextError: React.FC<MIHelperTextErrorProps> = ({ children, ...props }) => (
  <MIFormHelperText {...props} error>
    <Box
      component="span"
      sx={(theme) => ({
        alignItems: 'center',
        display: 'flex',
        fontSize: theme.typography.pxToRem(14),
        gap: theme.spacing(0.75),
        lineHeight: theme.typography.pxToRem(20),
      })}
    >
      <ReportRoundedIcon
        aria-hidden="true"
        sx={(theme) => ({
          color: theme.palette.error.main,
          fontSize: theme.typography.pxToRem(16),
        })}
      />
      {children}
    </Box>
  </MIFormHelperText>
);

export default MIHelperTextError;
