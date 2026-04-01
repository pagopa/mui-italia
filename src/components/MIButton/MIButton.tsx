import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { LoadingButton, Skeleton } from '@mui/lab';
import { Box } from '@mui/material';
import { colors } from './../../theme/foundations/colors';

export type MIButtonProps = Omit<ButtonProps, 'disabled'> & {
  isLoading?: boolean; // Optional prop to indicate if the button is in a loading state
  loaderType?: 'skeleton' | 'loading'; // Optional prop to specify the type of loader (skeleton or loading spinner), if not provided, it defaults to classic loading spinner
};

const MIButton: React.FC<MIButtonProps> = ({ children, loaderType, isLoading, ...props }) => {
  const skeletonLoader = (
    <Button {...props} sx={{ my: 3 }}>
      <Box sx={{ width: '141px' }}>
        <Skeleton sx={{ backgroundColor: colors.neutral.grey[450] }} />
      </Box>
    </Button>
  );

  const classicLoader = (
    <LoadingButton loading {...props} sx={{ width: '72px', my: 3 }}>
      {children}
    </LoadingButton>
  );

  const loaderTypeToRender = loaderType === 'skeleton' ? skeletonLoader : classicLoader;
  return (
    <>
      {isLoading ? (
        loaderTypeToRender
      ) : (
        <Button {...props} sx={{ my: 3 }}>
          {children}
        </Button>
      )}
    </>
  );
};

export default MIButton;
