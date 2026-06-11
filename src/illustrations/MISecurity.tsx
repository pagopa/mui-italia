import { Illustration } from '@components/Illustration';
import { useIllustrationColors, MIIllustrationProps } from 'utils/useIllustrations';

export const IllusMISecurity = ({ title = 'MISecurity', mode, ...rest }: MIIllustrationProps) => {
  const { colorPrimary, colorSecondary } = useIllustrationColors(mode);
  return (
    <Illustration name={title} {...rest}>
      <path
        d="M105 25C89.3107 22.4884 74.1395 17.4212 60.09 10C45.961 17.3841 30.7367 22.4487 15 25V54.445C15 87.78 43.335 104.445 60 110C76.665 104.445 105 87.78 105 54.445V25Z"
        fill={colorSecondary}
      />
      <path
        d="M55.06 73.7501C54.5667 73.7514 54.078 73.6548 53.6223 73.466C53.1665 73.2772 52.7528 72.9999 52.405 72.6501L42.405 62.6501C41.7222 61.9425 41.3447 60.995 41.3537 60.0118C41.3627 59.0286 41.7575 58.0882 42.4531 57.3932C43.1487 56.6983 44.0895 56.3043 45.0727 56.2963C46.056 56.2882 47.003 56.6666 47.71 57.3501L55.06 64.6951L72.405 47.3501C73.1119 46.6666 74.059 46.2882 75.0422 46.2963C76.0255 46.3043 76.9662 46.6983 77.6618 47.3932C78.3574 48.0882 78.7523 49.0286 78.7613 50.0118C78.7703 50.995 78.3927 51.9425 77.71 52.6501L57.71 72.6501C57.3631 72.9997 56.9502 73.277 56.4953 73.4658C56.0404 73.6547 55.5525 73.7513 55.06 73.7501Z"
        fill={colorPrimary}
      />
    </Illustration>
  );
};
