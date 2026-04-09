import { Illustration } from '@components/Illustration';
import { useIllustrationColors, MIIllustrationProps } from 'utils/useIllustrations';

export const IllusMISmartphone = ({
  title = 'MISmartphone',
  mode,
  ...rest
}: MIIllustrationProps) => {
  const { colorPrimary, colorSecondary } = useIllustrationColors(mode);
  return (
    <Illustration name={title} {...rest}>
      <path
        d="M90 24C90 18.4772 85.5228 14 80 14H70H50H40C34.4772 14 30 18.4772 30 24V96C30 101.523 34.4772 106 40 106H80C85.5228 106 90 101.523 90 96V24Z"
        fill="#CED8F9"
      />
      <rect x="34" y="18" width="52" height="84" rx="8" fill={colorPrimary} />
      <rect x="52" y="22" width="16" height="8" rx="4" fill={colorSecondary} />
    </Illustration>
  );
};
