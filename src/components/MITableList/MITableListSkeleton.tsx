import { Skeleton, Stack } from '@mui/material';

import { MIPaper } from '@components/MIPaper';

import type { MITableListSkeletonProps } from './types';

const DEFAULT_ROWS = 4;
const DEFAULT_COLS = 3;
const DEFAULT_ACTION_WIDTH = '6ch';

const MITableListSkeleton = ({
  rows = DEFAULT_ROWS,
  cols = DEFAULT_COLS,
  action = false,
}: MITableListSkeletonProps) => (
  <Stack spacing={2} width="100%" aria-hidden="true">
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <MIPaper key={rowIndex} variant="outlined" padding={24}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'stretch', md: 'center' }}
          spacing={{ xs: 2, md: 3 }}
        >
          {Array.from({ length: cols }).map((_, colIndex) => (
            <Stack key={colIndex} spacing={0.5} flex={1}>
              <Skeleton variant="text" width="50%" />
              <Skeleton variant="text" width="80%" />
            </Stack>
          ))}

          {action && (
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignSelf={{ xs: 'flex-end', md: 'center' }}
              flexShrink={0}
            >
              <Skeleton variant="text" width={DEFAULT_ACTION_WIDTH} />
            </Stack>
          )}
        </Stack>
      </MIPaper>
    ))}
  </Stack>
);

export default MITableListSkeleton;
