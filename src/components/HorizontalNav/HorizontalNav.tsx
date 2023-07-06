"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";

interface sectionCTA {
  label: string;
  title: string;
  href: string;
}

export interface Section {
  icon?: JSX.Element;
  title: string;
  subtitle: string | JSX.Element;
  cta: sectionCTA;
}

export interface HorizontalNavProps {
  sections: Array<Section>;
}

export const HorizontalNav = ({ sections }: HorizontalNavProps) => {
  const theme = useTheme();

  const lastColor =
    sections.length === 1
      ? theme.palette.primary.dark
      : sections.length === 2
      ? theme.palette.primary.main
      : theme.palette.primary.light;

  return (
    <Box
      sx={{
        backgroundImage: {
          md: `linear-gradient(90deg, ${theme.palette.primary.dark} 50%, ${lastColor} 50%)`,
          xs: `none`,
        },
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            display: "grid",
            columnGap: 3,
            rowGap: 3,
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          }}
        >
          <Box gridColumn={{ xs: "1 / span 12", md: "2 / span 10" }} my="auto">
            <Stack
              direction={{ xs: "column", md: "row" }}
              width="100%"
              color="primary.contrastText"
              textAlign="center"
            >
              {sections.map((section, index) => (
                <>
                  {index > 2 ? (
                    <></>
                  ) : (
                    <Box
                      key={index}
                      bgcolor={
                        index === 0
                          ? theme.palette.primary.dark
                          : index === 1
                          ? theme.palette.primary.main
                          : theme.palette.primary.light
                      }
                      flex="1 0"
                      sx={{
                        px: 4,
                        py: {
                          xs: 4,
                          sm: 4,
                          md: 8,
                        },
                      }}
                    >
                      <Stack
                        spacing={4}
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box
                          color="primary.contrastText"
                          sx={{
                            svg: {
                              height: "60px",
                              width: "60px",
                            },
                          }}
                        >
                          {section.icon}
                        </Box>
                        <Stack spacing={2}>
                          <Typography variant="h5" color="primary.contrastText">
                            {section.title}
                          </Typography>
                          <>
                            {section.subtitle &&
                              typeof section.subtitle === "string" && (
                                <Typography
                                  variant="body1"
                                  color="primary.contrastText"
                                >
                                  {section.subtitle}
                                </Typography>
                              )}
                            {section.subtitle &&
                              typeof section.subtitle !== "string" &&
                              section.subtitle}
                          </>
                        </Stack>
                        {section.cta && (
                          <Button
                            variant="text"
                            color="negative"
                            endIcon={<ArrowForward />}
                          >
                            {section.cta.label}
                          </Button>
                        )}
                      </Stack>
                    </Box>
                  )}
                </>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
