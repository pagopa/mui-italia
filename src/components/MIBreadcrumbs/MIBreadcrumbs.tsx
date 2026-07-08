import { StyledBreadcrumbs } from './StyledBreadcrumbs';
import React from 'react';
import { MIBreadcrumbsProps, MIBreadcrumb } from './types';
import { Link, Theme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Breadcrumb: React.FC<MIBreadcrumb> = ({ label, showBackButton = false }) => {
  return (
    <Link
      underline="hover"
      aria-current="page"
      href="#"
      key={label}
    >
      {showBackButton && <ArrowBackIcon />}
      {label}
    </Link>
  );
}

export const MIBreadcrumbs: React.FC<MIBreadcrumbsProps> = ({ breadcrumbs, backButtonLabel = 'Indietro', variant = 'default', ...props }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <StyledBreadcrumbs {...props} aria-label="breadcrumb" separator="›">
        {
          variant === 'wizard' || isMobile ? <Breadcrumb label={backButtonLabel} showBackButton /> : breadcrumbs?.map((breadcrumb) =>
            <Breadcrumb key={breadcrumb.label} {...breadcrumb} />
          )
        }
      </StyledBreadcrumbs>
    </>

  );
};

