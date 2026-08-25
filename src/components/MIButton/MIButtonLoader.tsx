import { MISpinner } from '@components/MISpinner';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import { getSpinnerColor } from './styles';
import { MIButtonColor, MIButtonLoaderType, MIButtonVariant } from './types';

type MIButtonLoaderProps = {
  color: MIButtonColor;
  variant: MIButtonVariant;
  loaderType?: MIButtonLoaderType;
  loadingAriaLabel?: string;
  fullWidth?: boolean;
};

const MIButtonLoader: React.FC<MIButtonLoaderProps> = ({
  color,
  variant,
  loaderType = MIButtonLoaderType.SPINNER,
  loadingAriaLabel = 'Caricamento in corso',
  fullWidth = false,
}) => {
  if (loaderType === MIButtonLoaderType.SKELETON) {
    return (
      <Box sx={{ width: fullWidth ? '80%' : '141px' }}>
        <Skeleton
          sx={{ backgroundColor: (theme) => theme.colors.neutral.grey[450] }}
          aria-label={loadingAriaLabel}
        />
      </Box>
    );
  }

  return <MISpinner color={getSpinnerColor(color, variant)} aria-label={loadingAriaLabel} />;
};

export default MIButtonLoader;
