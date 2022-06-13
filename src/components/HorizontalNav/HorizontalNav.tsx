import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

interface sectionCTA {
  label: string;
  title: string;
  href: string;
}

export interface Section {
  icon?: JSX.Element;
  title: string;
  subtitle: string;
  cta: sectionCTA;
}

export interface HorizontalNavProps {
  sections: [Section, Section];
}

export const HorizontalNav = ({ sections }: HorizontalNavProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: {
          md: `linear-gradient(90deg, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.main} 50%)`,
          xs: `linear-gradient(180deg, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.main} 50%)`,
        },
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            display: "grid",
            columnGap: 3,
            rowGap: 3,
            gridTemplateColumns: {
              xs: "repeat(6, minmax(0, 1fr))",
              md: "repeat(12, minmax(0, 1fr))",
            },
            py: {
              xs: 4,
              sm: 4,
              md: 8,
            },
          }}
        >
          <Box
            bgcolor="primary.dark"
            gridColumn={{
              xs: "span 6",
              md: "2 / span 5",
            }}
            gridRow={{
              xs: "auto",
              md: 1,
            }}
            my="auto"
          >
            <Stack spacing={4} height="100%" alignItems="center">
              <Box
                color="primary.contrastText"
                sx={{
                  svg: {
                    height: "60px",
                    width: "60px",
                  },
                }}
              >
                {sections[0].icon}
              </Box>
              <Typography variant="h5" color="primary.contrastText">
                {sections[0].title}
              </Typography>
              <Typography variant="body1" color="primary.contrastText">
                {sections[0].subtitle}
              </Typography>
              <Button variant="text">
                <Typography color="primary.contrastText">
                  {sections[0].cta.label}
                </Typography>
                <ArrowForward sx={{ color: "primary.contrastText" }} />
              </Button>
            </Stack>
          </Box>
          <Box
            bgcolor="primary.main"
            gridColumn={{
              xs: "span 6",
              md: "7 / span 5",
            }}
            gridRow={{
              xs: "auto",
              md: 1,
            }}
            my="auto"
          >
            <Stack spacing={4} height="100%" alignItems="center">
              <Box
                color="primary.contrastText"
                sx={{
                  svg: {
                    height: "60px",
                    width: "60px",
                  },
                }}
              >
                {sections[1].icon}
              </Box>
              <Typography variant="h5" color="primary.contrastText">
                {sections[1].title}
              </Typography>
              <Typography variant="body1" color="primary.contrastText">
                {sections[1].subtitle}
              </Typography>
              <Button variant="text">
                <Typography color="primary.contrastText">
                  {sections[1].cta.label}
                </Typography>
                <ArrowForward sx={{ color: "primary.contrastText" }} />
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
