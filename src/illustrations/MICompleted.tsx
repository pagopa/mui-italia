import { Illustration } from '@components/Illustration';
import { getIllustrationColors, MIIllustrationProps } from 'utils/illustrations';

export const IllusMICompleted = ({
  title = 'MICompleted',
  mode = 'light',
  ...rest
}: MIIllustrationProps) => {
  const { colorPrimary, colorSecondary } = getIllustrationColors(mode);
  return (
    <Illustration viewBox="0 0 60 60" name={title} {...rest}>
      <path
        d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z"
        fill={colorSecondary}
      />
      <path
        d="M27.3532 36.727C27.1066 36.7276 26.8623 36.6793 26.6344 36.5849C26.4065 36.4905 26.1996 36.3519 26.0257 36.177L21.0257 31.177C20.6843 30.8232 20.4956 30.3495 20.5001 29.8578C20.5046 29.3662 20.702 28.896 21.0498 28.5486C21.3976 28.2011 21.868 28.0041 22.3596 28.0001C22.8512 27.996 23.3248 28.1852 23.6782 28.527L27.3532 32.1995L36.0257 23.527C36.3792 23.1852 36.8527 22.996 37.3444 23.0001C37.836 23.0041 38.3064 23.2011 38.6542 23.5486C39.002 23.896 39.1994 24.3662 39.2039 24.8578C39.2084 25.3494 39.0196 25.8232 38.6782 26.177L28.6782 36.177C28.5048 36.3518 28.2983 36.4904 28.0709 36.5848C27.8434 36.6793 27.5995 36.7276 27.3532 36.727Z"
        fill={colorPrimary}
      />
    </Illustration>
  );
};
