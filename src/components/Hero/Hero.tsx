import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import {
  gutter,
  marginParagraph,
  mobilePaddingX,
  mobilePaddingY,
  paddingX,
  paddingY,
} from "@theme";
import useMediaQuery from "@mui/material/useMediaQuery";
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
}: HeroProps) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      bgcolor="primary.main"
      sx={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <Grid
        container
        direction={textPosition === position.RIGHT ? "row-reverse" : "row"}
        px={isMobile ? mobilePaddingX : paddingX}
        py={isMobile ? mobilePaddingY : paddingY}
      >
        <Grid item sm={12} md={6} my="auto" pr={gutter}>
          <Typography
            variant="h1"
            color="primary.contrastText"
            mb={marginParagraph}
          >
            {title}
          </Typography>
          <Typography color="primary.contrastText" mb={marginParagraph}>
            {subtitle}
          </Typography>
          {ctaPrimary && (
            <Box mb={isMobile ? marginParagraph : 0}>
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="column">
            {ctaSecondary && (
              <Box alignSelf="flex-start" mb={marginParagraph}>
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
            <Box maxHeight="600px" maxWidth="100%">
              {image && <img alt={altText} src={image} width="100%" />}
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
