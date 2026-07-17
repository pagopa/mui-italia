import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Overview: FC<Props> = ({ children }) => {
  return <Box sx={{ mt: 3, typography: 'body1', '& p': { margin: 0 } }}>{children}</Box>;
};

export default Overview;
