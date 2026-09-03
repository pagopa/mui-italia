import { FC } from "react";
import { Typography } from "@mui/material";
import { pxToRem } from '../../theme';
import { percentageFormatter } from './utils';

const MIProgressKpiCardPercentage: FC<{ percentage: number }> = ({ percentage }) => (
    <Typography fontSize={pxToRem(32)} fontWeight={600} mb={1} mt={1}>
      {percentageFormatter.format(percentage)}%
    </Typography>
  );

export default MIProgressKpiCardPercentage;