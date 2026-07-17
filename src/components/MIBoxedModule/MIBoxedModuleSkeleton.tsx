import { Skeleton } from '@mui/material';
import { FC } from 'react';

const MIBoxedModuleSkeleton: FC = () => (
  <>
    <Skeleton variant="rounded" width="30%" height="1.5rem" />
    <Skeleton variant="rounded" width="60%" height="1rem" />
    <Skeleton variant="rounded" width="25%" height="1rem" />
  </>
);

export default MIBoxedModuleSkeleton;
