import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

const Section: FC<Props> = ({ title, description, children }) => (
  <Box sx={{ mt: 5 }}>
    <Typography variant="h2" gutterBottom sx={{ fontSize: 26, fontWeight: 600 }}>
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

export default Section;
