import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { CTA, position } from "@types";

export interface InfoblockProps {
  overline?: string;
  title: string;
  content?: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  textPosition?: position;
  image: string;
  altText?: string;
  imageShadow: boolean;
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
  imageShadow,
}: InfoblockProps) => (
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
          {overline && (
            <Typography
              variant="body2"
              fontWeight="bold"
              color="text.secondary"
            >
              {overline}
            </Typography>
          )}
          <Typography variant="h4" color="text.primary">
            {title}
          </Typography>
          {content && <Typography color="text.primary">{content}</Typography>}
        </Stack>
        {(ctaPrimary || ctaSecondary) && (
          <Stack direction="row" spacing={2}>
            {ctaPrimary && (
              <Button
                aria-label={ctaPrimary.title}
                variant="contained"
                href={ctaPrimary.href}
              >
                {ctaPrimary.label}
              </Button>
            )}
            {ctaSecondary && (
              <Button
                aria-label={ctaSecondary.title}
                variant="outlined"
                href={ctaSecondary.href}
              >
                {ctaSecondary.label}
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box maxHeight="600px" maxWidth="100%">
        <img alt={altText} src={image} width="100%" />
      </Box>
    </Grid>
    <Grid item sm={0} md={1} />
  </Grid>
);
