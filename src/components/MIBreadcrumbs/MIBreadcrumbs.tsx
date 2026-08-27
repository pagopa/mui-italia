'use client';

import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { Theme, useMediaQuery } from '@mui/material';
import React from 'react';
import MIBreadcrumbItem from './MIBreadcrumbItem';
import { StyledBreadcrumbs } from './StyledBreadcrumbs';
import { MIBreadcrumbsProps } from './types';

const MIBreadcrumbs: React.FC<MIBreadcrumbsProps> = ({
  children,
  backButtonLabel = 'Indietro',
  backButtonAction = () => window.history.back(),
  variant = 'extended',
  ...props
}) => {
  const isMobileResolution = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <StyledBreadcrumbs aria-label="breadcrumbs" separator={<ChevronRightIcon />} {...props}>
      {isMobileResolution || variant === 'compact' ? (
        <MIBreadcrumbItem label={backButtonLabel} type="back" onClick={backButtonAction} />
      ) : (
        children
      )}
    </StyledBreadcrumbs>
  );
};

export default MIBreadcrumbs;
