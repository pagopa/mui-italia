'use client';

import { ArrowBackRounded as ArrowBackIcon } from '@mui/icons-material';
import { Button, Link, Typography } from '@mui/material';
import React from 'react';
import { MIBreadcrumbItemProps } from './types';

const MIBreadcrumbItem: React.FC<MIBreadcrumbItemProps> = ({
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
      <Typography {...props} className={'MIBreadcrumbItem-current'} aria-current="page">
        {label}
      </Typography>
    );
  }
  if (href) {
    return (
      <Link {...props} underline="hover" href={href} fontWeight="bold">
        {label}
      </Link>
    );
  }
  if (onClick) {
    return (
      <Link
        {...props}
        component={Button}
        underline="hover"
        fontWeight="bold"
        onClick={onClickHandler}
        startIcon={type === 'back' && <ArrowBackIcon className="MIBackIcon" />}
      >
        {label}
      </Link>
    );
  }
  return null;
};

export default MIBreadcrumbItem;
