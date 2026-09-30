import { Illustration } from '@components/Illustration';
import { useIllustrationColors, MIIllustrationProps } from 'utils/useIllustrations';

export const IllusMIHourglass = ({ title = 'MIHourglass', mode, ...rest }: MIIllustrationProps) => {
  const { colorPrimary, colorSecondary } = useIllustrationColors(mode);
  return (
    <Illustration name={title} {...rest}>
      <path
        d="M95 22.5V31.3C95.4452 34.0063 94.9354 36.7832 93.558 39.155C92.1806 41.5267 90.0213 43.3456 87.45 44.3L60.1 60L32.6 44.3C30.0166 43.3587 27.8432 41.5444 26.4555 39.1707C25.0677 36.7969 24.5529 34.013 25 31.3V22.5C25 20.5109 25.7902 18.6032 27.1967 17.1967C28.6032 15.7902 30.5109 15 32.5 15H87.5C89.4891 15 91.3968 15.7902 92.8033 17.1967C94.2098 18.6032 95 20.5109 95 22.5Z"
        fill={colorPrimary}
      />
      <path
        d="M95 88.7V97.5C95 99.4891 94.2098 101.397 92.8033 102.803C91.3968 104.21 89.4891 105 87.5 105H32.5C30.5109 105 28.6032 104.21 27.1967 102.803C25.7902 101.397 25 99.4891 25 97.5V88.7C24.5529 85.987 25.0677 83.2031 26.4555 80.8294C27.8432 78.4556 30.0166 76.6413 32.6 75.7L60.1 60L87.45 75.7C90.0213 76.6544 92.1806 78.4733 93.558 80.8451C94.9354 83.2168 95.4452 85.9937 95 88.7Z"
        fill={colorSecondary}
      />
    </Illustration>
  );
};
