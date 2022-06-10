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

  const left = aspectRatio === "4/3" ? "43px" : "49px";

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
            mr={imageShadow ? "43px" : "0"}
          >
            <Box
              sx={{
                display: "grid",
                maxHeight: "450px",
                maxWidth: "100%",
                mx: "auto",
              }}
            >
              {imageShadow && (
                <Box
                  sx={{
                    gridArea: "1 / 1 / 2 / 2",
                    zIndex: 2,
                    backgroundImage: `url(${imageTypePattern})`,
                    backgroundSize: "contain",
                    height: "100%",
                    width: "100%",
                    mt: aspectRatio === "4/3" ? "62px" : "72px",
                  }}
                />
              )}
              <img
                alt={altText}
                src={image}
                style={{
                  objectFit: "cover",
                  objectPosition: "50%",
                  maxWidth: "100%",
                  maxHeight: "450px",
                  width: "100%",
                  gridArea: "1 / 1 / 2 / 2",
                  zIndex: 5,
                  aspectRatio,
                  marginLeft: imageShadow ? left : "0",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
