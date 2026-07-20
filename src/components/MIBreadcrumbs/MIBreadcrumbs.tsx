'use client';
import React from 'react';
import { StyledBreadcrumbs } from './StyledBreadcrumbs';
import { MIBreadcrumbItem } from './MIBreadcrumbItem';
import { MIBreadcrumbsProps } from './types';
import { Theme, useMediaQuery } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const MIBreadcrumbs: React.FC<MIBreadcrumbsProps> = ({ children, backButtonLabel = 'Indietro', backButtonAction = () => window.history.back(), variant = 'extended' }) => {
  const isMobileResolution = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <StyledBreadcrumbs aria-label="breadcrumb" separator={<ChevronRightIcon />}>
        {
          isMobileResolution || variant === 'compact' ? <MIBreadcrumbItem label={backButtonLabel} type='back' onClick={backButtonAction} /> :
            children
        }
      </StyledBreadcrumbs>
    </>

  );
};

