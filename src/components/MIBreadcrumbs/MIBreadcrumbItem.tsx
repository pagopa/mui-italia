'use client'
import { Link, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MIBreadcrumbItemProps } from './types';
import React from 'react';

export const MIBreadcrumbItem: React.FC<MIBreadcrumbItemProps> = ({ label, onClick, href, target, current = false, type = 'regular' }) => {

  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  }

  return current ? (
    <Typography className={'MIBreadcrumbItem-current'} aria-current='page'>{label}</Typography>
  ) : <Link
    onClick={onClickHandler}
    underline="hover"
    href={href}
    target={target}
  >
    {type === 'back' && <ArrowBackIcon />}
    {label}
  </Link>;
}