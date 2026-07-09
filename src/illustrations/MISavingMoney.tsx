import { Illustration } from '@components/Illustration';
import { useIllustrationColors, MIIllustrationProps } from 'utils/useIllustrations';

export const IllusMISavingMoney = ({
  title = 'MISavingMoney',
  mode,
  ...rest
}: MIIllustrationProps) => {
  const { colorPrimary, colorSecondary } = useIllustrationColors(mode);
  return (
    <Illustration name={title} {...rest}>
      <path
        d="M37.5 90.05C37.4781 93.569 38.5818 97.0028 40.65 99.85C27.25 99 15 94.1 15 85.05V80.65C21.6284 85.2852 29.4231 87.9701 37.5 88.4V90.05ZM37.65 69.7C29.5149 69.3323 21.6552 66.6429 15 61.95V66.35C15 74.7 25.4 79.5 37.5 80.9V71.35C37.5004 70.8463 37.5506 70.3438 37.65 69.85C37.6467 69.8229 37.6495 69.7953 37.6582 69.7694C37.6668 69.7435 37.6811 69.7198 37.7 69.7H37.65ZM45 52.4C34.3811 53.0058 23.8527 50.1456 15 44.25V47.65C15 56.65 27.05 61.55 40.35 62.4C44.6018 56.9775 50.5251 53.1106 57.2 51.4C53.1693 52.0804 49.0877 52.4149 45 52.4ZM63.7 49.85C67.3997 49.2169 71.1465 48.8991 74.9 48.9C74.9601 48.4859 74.9936 48.0684 75 47.65V44.25C71.6138 46.8023 67.7818 48.7014 63.7 49.85Z"
        fill={colorSecondary}
      />
      <path
        d="M45 44.9C61.5685 44.9 75 38.2067 75 29.95C75 21.6933 61.5685 15 45 15C28.4315 15 15 21.6933 15 29.95C15 38.2067 28.4315 44.9 45 44.9Z"
        fill={colorPrimary}
      />
      <path
        d="M105 85.15V90.05C105 100 90 105 75 105C60 105 45 100 45 90.05V85.15C53.7893 91.2274 64.3243 94.265 75 93.8C85.6757 94.265 96.2107 91.2274 105 85.15Z"
        fill={colorSecondary}
      />
      <path
        d="M105 71.35C105 79.6 91.55 86.3 75 86.3C58.45 86.3 45 79.6 45 71.35C45 63.1 58.45 56.4 75 56.4C91.55 56.4 105 63.1 105 71.35Z"
        fill={colorPrimary}
      />
    </Illustration>
  );
};
