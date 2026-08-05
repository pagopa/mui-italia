'use client';
import { Button, Link, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MIBreadcrumbItemProps } from './types';
import React from 'react';

export const MIBreadcrumbItem: React.FC<MIBreadcrumbItemProps> = ({ label, onClick, href, current = false, type = 'regular', ...props } ) => {

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  }

  if (current) {
    return (
      <Typography className={'MIBreadcrumbItem-current'} aria-current='page' {...props}>{label}</Typography>
    );
  }
  if (href) {  
    return (
      <Link
        underline="hover"
        {...props}
      >
        {label}
      </Link>
    );
  }
  if (onClick) {
    return (
      <Link
        component={Button}
        underline="hover"
        {...props}
        onClick={onClickHandler}
        type="button"
      >
        {type === 'back' && <ArrowBackIcon />}
        {label}
      </Link>
    );
  }
  return null;
};