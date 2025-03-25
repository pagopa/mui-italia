import { DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react';

type DefaultImgProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export type ImageFallbackProps = DefaultImgProps & {
  placeholder?: string;
};

export const ImageFallback = ({
  placeholder,
  src,
  ...props
}: ImageFallbackProps) => {
  const [errored, setErrored] = useState(false);

  const onError = () => {
    setErrored(true);
  };

  return (
    <img
      {...props}
      onError={onError}
      src={errored || !src ? placeholder : src}
    />
  );
};
