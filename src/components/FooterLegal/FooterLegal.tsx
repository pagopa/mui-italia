import { Box, Container, Typography } from "@mui/material";

export interface FooterLegalProps {
  content: JSX.Element | Array<JSX.Element>;
}

export const FooterLegal = ({ content }: FooterLegalProps): JSX.Element => (
  <Box
    sx={{
      borderTop: 1,
      borderColor: "divider",
      backgroundColor: "background.paper",
    }}
  >
    <Container sx={{ px: 2, py: 2 }}>
      <Typography
        color="text.primary"
        component="p"
        variant="caption"
        sx={{ textAlign: "center" }}
      >
        {content}
      </Typography>
    </Container>
  </Box>
);
