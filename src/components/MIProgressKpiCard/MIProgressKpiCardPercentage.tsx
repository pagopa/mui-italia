import { FC } from "react";
import { Typography } from "@mui/material";
import { percentageFormatter } from './utils';

const MIProgressKpiCardPercentage: FC<{ percentage: number; }> = ({ percentage }) => {
  return (
    <Typography fontSize={32} fontWeight={600} mb={1} mt={1}>
      {percentageFormatter.format(percentage)}%
    </Typography>
  );
};

export default MIProgressKpiCardPercentage;