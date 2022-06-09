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
              alignItems="flex-start"
              justifyContent={{ xs: "flex-start", md: "center" }}
              spacing={8}
              width="100%"
              sx={{
                overflowX: { xs: "scroll", md: "hidden" },
                overflowY: "hidden",
                scrollSnapType: "x mandatory",
              }}
            >
              {items.map((item, index) => (
                <Stack
                  key={index}
                  alignContent="center"
                  justifyContent="flex-start"
                  spacing={4}
                  sx={{
                    width: { xs: "80%", md: `calc(100%/${items.length})` },
                    flex: { xs: "none", md: "auto" },
                    scrollSnapAlign: "start",
                    "&:last-child": {
                      paddingRight: { xs: 8, md: 0 },
                    },
                  }}
                >
                  <Typography
                    variant="caption"
                    color="primary.dark"
                    alignSelf="flex-start"
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </Typography>
                  <Stack direction="row" justifyContent="space-between">
                    <Box alignSelf="flex-start">{item.icon}</Box>
                    {index < items.length - 1 && (
                      <ArrowForward sx={{ color: "primary.dark" }} />
                    )}
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
