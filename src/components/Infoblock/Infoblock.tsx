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

export interface InfoblockProps {
  overline?: string;
  title: string;
  content?: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  textPosition?: position;
  image?: string;
  altText?: string;
}

export const Infoblock = ({
  overline,
  title,
  content,
  ctaPrimary,
  ctaSecondary,
  textPosition,
  image,
  altText = "info image",
}: InfoblockProps) => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box bgcolor="primary.main">
      <Grid
        container
        direction={textPosition === position.RIGHT ? "row-reverse" : "row"}
        px={isMobile ? mobilePaddingX : paddingX}
        py={isMobile ? mobilePaddingY : paddingY}
      >
        <Grid item sm={12} md={6} my="auto" pr={gutter}>
          {overline && (
            <Typography variant="body1" color="text.secondary">
              {overline}
            </Typography>
          )}
          <Typography variant="h4" color="text.primary" mb={marginParagraph}>
            {title}
          </Typography>
          {content && (
            <Typography color="text.primary" mb={marginParagraph}>
              {content}
            </Typography>
          )}
          {ctaPrimary && (
            <Stack direction="column" mb={isMobile ? marginParagraph : 0}>
              <Box mb={isMobile ? marginParagraph : 0}>
                <Button
                  aria-label={ctaPrimary.title}
                  variant="contained"
                  href={ctaPrimary.href}
                >
                  {ctaSecondary.label}
                </Button>
                <Button
                  aria-label={ctaSecondary.title}
                  variant="contained"
                  href={ctaPrimary.href}
                >
                  {ctaSecondary.label}
                </Button>
              </Box>
            </Stack>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {image ? (
            <Box maxHeight="600px" maxWidth="100%">
              <img alt={altText} src={image} width="100%" />
            </Box>
          ) : (
            <Box bgcolor="primary.dark" width="330px" height="100%" />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
