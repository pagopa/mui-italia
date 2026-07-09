import { StyledBreadcrumbs } from './StyledBreadcrumbs';
import React from 'react';
import { MIBreadcrumbsProps, MIBreadcrumbProps } from './types';
import { Link, Theme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Breadcrumb: React.FC<MIBreadcrumbProps> = ({ label, showBackButton = false, onClick, href, target, }) => {

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
      {showBackButton && <ArrowBackIcon />}
      {label}
    </Link>
  );
}

export const MIBreadcrumbs: React.FC<MIBreadcrumbsProps> = ({ elements, backButtonLabel = 'Indietro', variant = 'responsive', ...props }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <StyledBreadcrumbs {...props} aria-label="breadcrumb" separator="›">
        {
          variant === 'mobileOnly' || isMobile ? <Breadcrumb label={backButtonLabel} showBackButton /> : elements?.map((element) =>
            <Breadcrumb key={element.label} {...element} />
          )
        }
      </StyledBreadcrumbs>
    </>

  );
};

