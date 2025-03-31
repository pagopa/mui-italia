import { LogoPagoPACompany } from "@assets/LogoPagoPACompany";
import { ImageFallback, ImageFallbackProps } from "@components/ImageFallback";

export type CompanyLogoProps =
  | ImageFallbackProps
  | { element?: React.ReactNode };

export const CompanyLogo = (props: CompanyLogoProps) => {
  if ('element' in props) {
    return props.element;
  }

  if ('src' in props) {
    return <ImageFallback {...props} />;
  }

  return <LogoPagoPACompany />;
};
