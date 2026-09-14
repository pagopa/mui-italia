import { Illustration } from '@components/Illustration';
import { useIllustrationColors, MIIllustrationProps } from 'utils/useIllustrations';

export const IllusMIMouse = ({ title = 'MIMouse', mode, ...rest }: MIIllustrationProps) => {
  const { colorPrimary, colorSecondary } = useIllustrationColors(mode);
  return (
    <Illustration name={title} {...rest}>
      <path
        d="M60 105C80 105 95 95 95 70V50C95 25 80 15 60 15C40 15 25 25 25 50V70C25 95 40 105 60 105Z"
        fill={colorSecondary}
      />
      <path
        d="M63.75 33.54V15.1C62.5 15.05 61.25 15 60 15C58.75 15 57.5 15.05 56.25 15.1V33.54C55.1126 34.1926 54.1672 35.1332 53.5089 36.2672C52.8506 37.4013 52.5026 38.6887 52.5 40V47.5C52.5 49.4891 53.2902 51.3968 54.6967 52.8033C56.1032 54.2098 58.0109 55 60 55C61.9891 55 63.8968 54.2098 65.3033 52.8033C66.7098 51.3968 67.5 49.4891 67.5 47.5V40C67.4974 38.6887 67.1494 37.4013 66.4911 36.2672C65.8328 35.1332 64.8874 34.1926 63.75 33.54Z"
        fill={colorPrimary}
      />
    </Illustration>
  );
};
