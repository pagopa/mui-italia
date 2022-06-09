import { Box, Container, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export interface Item {
  icon?: JSX.Element;
  title: string;
  subtitle: string;
}

export interface ShowcaseProps {
  title: string;
  items: Array<Item>;
}

export const Walkthrough = ({ title, items }: ShowcaseProps) => (
  <Box bgcolor="#FAFAFA">
    <Container
      maxWidth="xl"
      sx={{
        py: {
          xs: 4,
          sm: 4,
          md: 8,
        },
      }}
    >
      <Stack alignContent="center" spacing={8}>
        <Typography variant="h4" textAlign="center">
          {title}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: "repeat(12, 1fr)",
          }}
        >
          <Box gridColumn="2 / span 10">
            <Stack
              direction="row"
              alignContent="center"
              justifyContent="center"
              spacing={8}
            >
              {items.map((item, index) => (
                <Stack
                  key={index}
                  alignContent="center"
                  justifyContent="center"
                  spacing={4}
                  sx={{
                    width: { sx: "100%", md: `calc(100%/${items.length})` },
                  }}
                >
                  <Typography
                    variant="caption"
                    color="primary.dark"
                    alignSelf="flex-start"
                  >
                    {index.toString().padStart(2, "0")}
                  </Typography>
                  <Stack direction="row" justifyContent="space-between">
                    <Box alignSelf="flex-start">{item.icon}</Box>
                    <ArrowForward color="primary.dark" />
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2">{item.subtitle}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Container>
  </Box>
);
