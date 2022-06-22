import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { CTA } from "@types";
import { useEffect, useState } from "react";

export interface InfoblockProps {
  overline?: string;
  title: string;
  content?: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  inverse: boolean;
  image: string;
  altText?: string;
  imageShadow: boolean;
  imageType?: "circle";
  aspectRatio?: "4/3" | "9/16";
}

// eslint-disable-next-line complexity
export const Infoblock = ({
  overline,
  title,
  content,
  ctaPrimary,
  ctaSecondary,
  inverse = false,
  image,
  altText = "info image",
  imageShadow,
  imageType,
  aspectRatio = "4/3",
}: InfoblockProps) => {
  const [imageTypePattern, setImageTypePattern] = useState("");

  const imagePadding = imageShadow ? 5 : 0;

  useEffect(() => {
    import(`./patterns/${imageType}_${aspectRatio.replace("/", "_")}.svg`)
      .then((patternImage) => setImageTypePattern(patternImage.default))
      .catch(() => console.warn("Infobox: Pattern not found"));
  }, []);

  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            columnGap: 3,
            rowGap: 5,
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
                {overline && (
                  <Typography variant="overline" color="text.secondary">
                    {overline}
                  </Typography>
                )}
                <Typography variant="h4" color="text.primary">
                  {title}
                </Typography>
                {content && (
                  <Typography color="text.primary">{content}</Typography>
                )}
              </Stack>
              {(ctaPrimary || ctaSecondary) && (
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  {/* One CTA below the other one
                  in the mobile version to avoid the multi-line label */}
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
            my="auto"
          >
            <Box
              sx={{
                display: "grid",
                position: "relative",
                width: {
                  xs: "100%",
                  md: aspectRatio === "4/3" ? "auto" : "50%",
                },
                mx: "auto",
                "&:before": {
                  display: "block",
                  content: '""',
                  paddingTop: {
                    xs: aspectRatio === "4/3" ? null : "100%",
                    md: aspectRatio === "4/3" ? "75%" : "177.75%",
                  },
                },
              }}
            >
              {imageShadow && (
                <Box
                  component="img"
                  src={imageTypePattern}
                  sx={{
                    display: { xs: "none", md: "block" },
                    boxSizing: "border-box",
                    width: "100%",
                    height: aspectRatio === "4/3" ? "auto" : "100%",
                    objectFit: "cover",
                    objectPosition: "50%",
                    gridArea: "1 / 1 / 2 / 2",
                    position: "absolute",
                    zIndex: 3,
                    top: aspectRatio === "4/3" ? 0 : "40px",
                    right: 0,
                    bottom: 0,
                    left: 0,
                    paddingTop: aspectRatio === "4/3" ? 5 : 0,
                    paddingRight: inverse ? 0 : 5,
                    paddingLeft: inverse ? 5 : 0,
                  }}
                />
              )}
              <Box
                component="img"
                alt={altText}
                src={image}
                sx={{
                  boxSizing: "border-box",
                  paddingLeft: {
                    xs: 0,
                    md: inverse ? 0 : imagePadding,
                  },
                  paddingRight: {
                    xs: 0,
                    md: inverse ? imagePadding : 0,
                  },
                  width: "100%",
                  height: aspectRatio === "4/3" ? "auto" : "100%",
                  objectFit: "cover",
                  objectPosition: "50%",
                  gridArea: "1 / 1 / 2 / 2",
                  position: "absolute",
                  zIndex: 3,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
