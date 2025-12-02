import { ErrorOutlineOutlined } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

type Props<T> = {
  noResultsText: string;
  filteredOptions: Array<T>;
};

const DefaultEmptyState = <T,>({ noResultsText, filteredOptions }: Props<T>) => {
  if (filteredOptions.length > 0) {
    return <></>;
  }

  return (
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
      <Typography fontWeight={600} fontSize="1.125rem" color="textSecondary">
        {noResultsText}
      </Typography>
    </Stack>
  );
};

export default DefaultEmptyState;
