import { Box, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

const SubSection: FC<Props> = ({ title, description, children }) => (
  <Box sx={{ mt: 2 }}>
    <Typography variant="h3" gutterBottom fontSize={22} fontWeight={500}>
      {title}
    </Typography>
    {description && (
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
    )}
    {children}
  </Box>
);

export default SubSection;
