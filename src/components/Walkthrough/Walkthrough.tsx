import { useTheme, useMediaQuery } from "@mui/material";
import { Box, Container, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export interface Item {
  icon?: JSX.Element;
  title: string;
  subtitle: string;
}

export interface WalkthroughProps {
  title: string;
  items: Array<Item>;
}

export const Walkthrough = ({ title, items }: WalkthroughProps) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  const containerPadding = {
    xs: theme.spacing(2),
    sm: theme.spacing(3),
    md: 0,
  };

  return (
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
        disableGutters={isTablet ? false : true}
      >
        <Stack alignContent="center" spacing={{ xs: 4, md: 8 }}>
          <Typography variant="h4" textAlign="center">
            {title}
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: {
                xs: "repeat(6, minmax(0, 1fr))",
                md: "repeat(12, minmax(0, 1fr))",
              },
            }}
          >
            <Box
              gridColumn={{
                xs: "span 6",
                md: "2 / span 10",
              }}
            >
              <Stack
                direction="row"
                alignItems="flex-start"
                justifyContent={{ xs: "flex-start", md: "center" }}
                spacing={{ xs: 4, lg: 8 }}
                sx={{
                  overflowX: { xs: "scroll", md: "hidden" },
                  overflowY: "hidden",
                  scrollSnapType: "x mandatory",
                  scrollPadding: containerPadding,
                  paddingLeft: containerPadding,
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  "&::after": {
                    content: '""',
                    paddingLeft: containerPadding,
                  },
                }}
              >
                {items.map((item, index) => (
                  <Stack
                    key={index}
                    alignContent="center"
                    justifyContent="flex-start"
                    spacing={1}
                    sx={{
                      minWidth: { xs: "80%", sm: "40%", md: "auto" },
                      flex: 1,
                      scrollSnapAlign: "start",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="primary.dark"
                      alignSelf="flex-start"
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      color="primary.dark"
                      sx={{
                        svg: {
                          height: "60px",
                          width: "60px",
                          fontWeight: "100px",
                        },
                      }}
                    >
                      <Box alignSelf="flex-start" height="60px" width="60px">
                        {item.icon}
                      </Box>
                      {index < items.length - 1 && <ArrowForward />}
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
};
