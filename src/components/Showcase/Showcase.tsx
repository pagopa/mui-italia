import { Box, Container, Stack, Typography } from "@mui/material";

export interface Item {
  icon?: JSX.Element;
  title: string;
  subtitle: string;
}

export interface ShowcaseProps {
  title: string;
  items: Array<Item>;
}

export const Showcase = ({ title, items }: ShowcaseProps) => (
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
      <Stack alignContent="center" textAlign="center" spacing={8}>
        <Typography variant="h4">{title}</Typography>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: "repeat(12, 1fr)",
          }}
        >
          <Box gridColumn="2 / span 10">
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignContent="center"
              justifyContent="center"
              spacing={{ xs: 6, md: 4 }}
            >
              {items.map((item, index) => (
                <Stack
                  key={index}
                  alignContent="center"
                  justifyContent="flex-start"
                  spacing={{ xs: 1, md: 4 }}
                  sx={{
                    flex: 1,
                  }}
                >
                  <Box
                    mx="auto"
                    sx={{
                      color: "primary.dark",
                      svg: {
                        height: "64px",
                        width: "64px",
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
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
