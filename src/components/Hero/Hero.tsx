import { Box, Button, Stack, Typography, Container } from "@mui/material";
import { CTA } from "@types";

export interface HeroProps {
  title: string;
  subtitle?: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  inverse?: boolean;
  image?: string;
  altText?: string;
  background?: string;
}

export const Hero = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  inverse = false,
  image,
  altText = "hero image",
  background,
}: HeroProps) => (
  <Box
    bgcolor="primary.main"
    sx={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
  >
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "grid",
          gap: 3,
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
          gridColumn={{
            xs: "span 6",
            md: inverse ? "7 / span 5" : "2 / span 5",
          }}
          gridRow={{
            xs: "auto",
            md: 1,
          }}
          my="auto"
        >
          <Stack spacing={4}>
            <Stack spacing={2}>
              <Typography variant="h1" color="primary.contrastText">
                {title}
              </Typography>
              <Typography color="primary.contrastText">{subtitle}</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              {ctaPrimary && (
                <Box>
                  <Button
                    aria-label={ctaPrimary.title}
                    variant="contained"
                    color="inverted"
                    href={ctaPrimary.href}
                  >
                    {ctaPrimary.label}
                  </Button>
                </Box>
              )}
              {ctaSecondary && (
                <Box>
                  <Button
                    aria-label={ctaSecondary.title}
                    color="inverted"
                    variant="outlined"
                    href={ctaSecondary.href}
                  >
                    {ctaSecondary.label}
                  </Button>
                </Box>
              )}
            </Stack>
          </Stack>
        </Box>
        <Box
          gridColumn={{
            xs: "span 6",
            md: inverse ? "2 / span 5" : "7 / span 5",
          }}
          gridRow={{
            xs: "auto",
            md: 1,
          }}
        >
          <Box maxHeight="600px" maxWidth="100%">
            {image && <img alt={altText} src={image} width="100%" />}
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);
