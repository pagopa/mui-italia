'use client';

import { Divider, Skeleton, Stack, useTheme } from '@mui/material';

import type { MIAccordionSkeletonProps } from './types';

const DEFAULT_ROWS = 6;

const MIAccordionSkeleton = ({ rows = DEFAULT_ROWS }: MIAccordionSkeletonProps) => {
  const theme = useTheme();

  return (
    <Stack divider={<Divider />} aria-hidden="true">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <Stack key={rowIndex} sx={{ gap: '6px', py: 1.5 }}>
          <Skeleton variant="rounded" width={100} height={22} sx={{ borderRadius: '100px' }} />
          <Skeleton
            variant="rounded"
            width={200}
            height={16}
            sx={{ borderRadius: theme.shape.radius[8], maxWidth: '100%' }}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default MIAccordionSkeleton;
