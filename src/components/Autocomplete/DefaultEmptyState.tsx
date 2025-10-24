import { ErrorOutlineOutlined } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import React from 'react';

type Props = {
  noResultsText: string;
};

const DefaultEmptyState: React.FC<Props> = ({ noResultsText }) => (
  <Stack
    spacing={1}
    alignItems="center"
    textAlign="center"
    sx={{
      backgroundColor: '#F4F5F8',
      py: 3,
    }}
  >
    <ErrorOutlineOutlined sx={{ color: '#D9D9D9' }} />
    <Typography fontWeight={600} fontSize="18px" color="textSecondary">
      {noResultsText}
    </Typography>
  </Stack>
);

export default DefaultEmptyState;
