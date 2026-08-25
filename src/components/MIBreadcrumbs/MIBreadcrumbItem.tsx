'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Link, Typography } from '@mui/material';
import React from 'react';
import { MIBreadcrumbItemProps } from './types';

export const MIBreadcrumbItem: React.FC<MIBreadcrumbItemProps> = ({
  label,
  onClick,
  href,
  current = false,
  type = 'regular',
  ...props
}) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  if (current) {
    return (
      <Typography className={'MIBreadcrumbItem-current'} aria-current="page" {...props}>
        {label}
      </Typography>
    );
  }
  if (href) {
    return (
      <Link underline="hover" href={href} {...props}>
        {label}
      </Link>
    );
  }
  if (onClick) {
    return (
      <Link component={Button} underline="hover" {...props} onClick={onClickHandler}>
        {type === 'back' && <ArrowBackIcon />}
        {label}
      </Link>
    );
  }
  return null;
};
