import { Illustration } from '@components/Illustration';
import { useIllustrationColors, MIIllustrationProps } from 'utils/useIllustrations';

export const IllusMIMapPin = ({ title = 'MIMapPin', mode, ...rest }: MIIllustrationProps) => {
  const { colorPrimary, colorSecondary } = useIllustrationColors(mode);
  return (
    <Illustration name={title} {...rest}>
      <path
        d="M60 105C79.33 105 95 98.2843 95 90C95 81.7157 79.33 75 60 75C40.67 75 25 81.7157 25 90C25 98.2843 40.67 105 60 105Z"
        fill={colorSecondary}
      />
      <path
        d="M80 34.9999C80.0048 31.2037 78.9291 27.4846 76.8986 24.277C74.8681 21.0695 71.9666 18.5061 68.5333 16.8864C65.1 15.2667 61.2766 14.6576 57.5099 15.1302C53.7433 15.6029 50.1889 17.1378 47.2622 19.5555C44.3355 21.9733 42.1573 25.1741 40.9823 28.7838C39.8072 32.3936 39.6837 36.2632 40.6263 39.9405C41.5689 43.6178 43.5386 46.951 46.3052 49.5504C49.0718 52.1498 52.5211 53.9081 56.25 54.6199V84.9999C56.25 85.9945 56.6451 86.9483 57.3483 87.6516C58.0516 88.3548 59.0054 88.7499 60 88.7499C60.9945 88.7499 61.9484 88.3548 62.6516 87.6516C63.3549 86.9483 63.75 85.9945 63.75 84.9999V54.6199C68.3168 53.7482 72.4373 51.3126 75.403 47.7319C78.3686 44.1513 79.9941 39.6492 80 34.9999Z"
        fill={colorPrimary}
      />
    </Illustration>
  );
};
