import { Illustration } from '@components/Illustration';
import { useIllustrationColors, MIIllustrationProps } from 'utils/useIllustrations';

export const IllusMIError = ({ title = 'MIError', mode, ...rest }: MIIllustrationProps) => {
  const { colorPrimary, colorSecondary } = useIllustrationColors(mode);
  return (
    <Illustration name={title} {...rest}>
      <path
        d="M60 110C87.6142 110 110 87.6142 110 60C110 32.3858 87.6142 10 60 10C32.3858 10 10 32.3858 10 60C10 87.6142 32.3858 110 60 110Z"
        fill={colorSecondary}
      />
      <circle cx="60" cy="76" r="4" fill={colorPrimary} />
      <rect x="56" y="40" width="8" height="28" rx="4" fill={colorPrimary} />
    </Illustration>
  );
};
