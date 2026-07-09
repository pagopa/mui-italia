import { StyledBreadcrumbs } from './StyledBreadcrumbs';
import React from 'react';
import { MIBreadcrumbsProps, MIBreadcrumbProps } from './types';
import { Link, Theme, useMediaQuery, SvgIconProps } from '@mui/material';

const Breadcrumb: React.FC<MIBreadcrumbProps> = ({ label, onClick, href, target, icon }) => {
  const [IconComponent, setIconComponent] = React.useState<React.ComponentType<SvgIconProps> | null>(null);

  React.useEffect(() => {
    if (icon) {
      import('@mui/icons-material')
        .then((module) => {
          const TargetIcon = module[icon] as React.ComponentType<SvgIconProps> | undefined;
          if (TargetIcon) {
            setIconComponent(() => TargetIcon);
          } else {
            console.error(`Failed to find icon: ${icon} in @mui/icons-material`);
            setIconComponent(null);
          }
        })
        .catch((err) => {
          console.error(`Failed to dynamically import @mui/icons-material`, err);
          setIconComponent(null);
        });
    } else {
      setIconComponent(null);
    }
  }, [icon]);

  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  }

  return (
    <Link
      onClick={onClickHandler}
      underline="hover"
      aria-current="page"
      href={href}
      key={label}
      target={target}
    >
      {icon && IconComponent && <IconComponent sx={{ mr: 1 }} />}
      {label}
    </Link>
  );
}

export const MIBreadcrumbs: React.FC<MIBreadcrumbsProps> = ({ elements, mobileButtonLabel = 'Indietro', mobileButtonIcon = 'ArrowBack', variant = 'responsive' }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <StyledBreadcrumbs aria-label="breadcrumb" separator="›">
        {
          variant === 'mobileOnly' || isMobile ? <Breadcrumb label={mobileButtonLabel} icon={mobileButtonIcon} /> : elements?.map((element) =>
            <Breadcrumb key={element.label} {...element} />
          )
        }
      </StyledBreadcrumbs>
    </>

  );
};

