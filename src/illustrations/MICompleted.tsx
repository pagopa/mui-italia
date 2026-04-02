import { Illustration } from '@components/Illustration';
import { useIllustrationColors, MIIllustrationProps } from 'utils/useIllustrations';

export const IllusMICompleted = ({ title = 'MICompleted', mode, ...rest }: MIIllustrationProps) => {
  const { colorPrimary, colorSecondary } = useIllustrationColors(mode);
  return (
    <Illustration name={title} {...rest}>
      <path
        d="M60 110C87.6142 110 110 87.6142 110 60C110 32.3858 87.6142 10 60 10C32.3858 10 10 32.3858 10 60C10 87.6142 32.3858 110 60 110Z"
        fill={colorSecondary}
      />
      <path
        d="M54.7065 73.4539C54.2132 73.4552 53.7245 73.3587 53.2688 73.1699C52.813 72.9811 52.3993 72.7037 52.0515 72.3539L42.0515 62.3539C41.3687 61.6463 40.9912 60.6989 41.0002 59.7157C41.0092 58.7324 41.404 57.7921 42.0996 57.0971C42.7952 56.4021 43.736 56.0082 44.7192 56.0001C45.7024 55.9921 46.6495 56.3705 47.3565 57.0539L54.7065 64.3989L72.0515 47.0539C72.7584 46.3705 73.7055 45.992 74.6887 46.0001C75.672 46.0082 76.6127 46.4021 77.3083 47.0971C78.0039 47.7921 78.3988 48.7324 78.4078 49.7157C78.4168 50.6989 78.0392 51.6463 77.3565 52.3539L57.3565 72.3539C57.0096 72.7036 56.5967 72.9809 56.1418 73.1697C55.6869 73.3585 55.199 73.4551 54.7065 73.4539Z"
        fill={colorPrimary}
      />
    </Illustration>
  );
};
