import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { CTA, position } from "@types";

export interface HeroProps {
  title: string;
  subtitle?: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  textPosition?: position;
  image?: string;
  altText?: string;
  background?: string;
}

export const Hero = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  textPosition,
  image,
  altText = "hero image",
  background,
}: HeroProps) => (
  <Box
    bgcolor="primary.main"
    sx={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
  >
    <Grid
      container
      direction={textPosition === position.RIGHT ? "row-reverse" : "row"}
      px={2}
      columnSpacing={2}
      sx={{
        py: {
          xs: 4,
          sm: 4,
          md: 8,
        },
      }}
    >
      <Grid item sm={0} md={1} />
      <Grid item sm={12} md={5} my="auto">
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
      </Grid>
      <Grid item sm={12} md={5}>
        <Box maxHeight="600px" maxWidth="100%">
          {image && <img alt={altText} src={image} width="100%" />}
        </Box>
      </Grid>
      <Grid item sm={0} md={1} />
    </Grid>
  </Box>
);
