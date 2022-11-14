import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import { SxProps } from "@mui/system";

type TOSAgreementProps = {
  productName: string;
  description: React.ReactNode | string;
  onConfirm: VoidFunction;

  children?: React.ReactNode;
  sx?: SxProps;
  confirmBtnDisabled?: boolean;
  confirmBtnLabel?: string;
};

export function TOSAgreement({
  productName,
  description,
  children,
  onConfirm,

  sx,
  confirmBtnDisabled,
  confirmBtnLabel = "Accedi",
}: TOSAgreementProps) {
  const isDescriptionComponentAString = typeof description === "string";

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ py: { xs: 4, lg: 16 }, backgroundColor: "#FAFAFA", ...sx }}
    >
      <Stack
        sx={{ maxWidth: 680, mx: "auto", px: { xs: 3, lg: 4 } }}
        spacing={{ xs: 4, lg: 8 }}
      >
        <Stack sx={{ textAlign: "center" }} spacing={1}>
          <Typography variant="h3">{productName}</Typography>
          <Typography component={isDescriptionComponentAString ? "p" : "span"}>
            {description}
          </Typography>
        </Stack>
        {children && <Box>{children}</Box>}
        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={onConfirm}
            variant="contained"
            disabled={confirmBtnDisabled}
          >
            {confirmBtnLabel}
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
