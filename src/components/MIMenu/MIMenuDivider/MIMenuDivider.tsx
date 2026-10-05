import { DividerProps } from '@mui/material';
import { FC } from 'react';
import { StyledMenuDivider } from './StyledMenuDivider';

export type MIMenuDividerProps = DividerProps;

const MIMenuDivider: FC<MIMenuDividerProps> = (props) => (
    <StyledMenuDivider component="li" {...props} />
);

export default MIMenuDivider;
