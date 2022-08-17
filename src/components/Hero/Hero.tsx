import { Box, Button, Stack, Typography, Container } from "@mui/material";
import { CTA } from "@types";

interface HeroTextProps {
  title: string;
  subtitle?: string | JSX.Element;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
}

interface HeroBasicProps extends HeroTextProps {
  inverse?: boolean;
  background?: string;
}

interface HeroJustTextProps extends HeroBasicProps {
  type: "text";
}

interface HeroWithImageProps extends HeroBasicProps {
  type: "image";
  image: string;
  altText: string;
}

export type HeroProps = HeroJustTextProps | HeroWithImageProps;

const HERO_TEXT_PADDING = { xs: 4, sm: 4, md: 8 };

const HeroTextContent = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: HeroTextProps) => (
  <Stack spacing={4}>
    <Stack spacing={2}>
      <Typography variant="h1" color="primary.contrastText">
        {title}
      </Typography>
      <>
        {subtitle && typeof subtitle === "string" && (
          <Typography variant="body1" color="primary.contrastText">
            {subtitle}
          </Typography>
        )}
        {subtitle && typeof subtitle !== "string" && subtitle}
      </>
    </Stack>
    <Stack direction="row" spacing={2}>
      {ctaPrimary && (
        <Box>
          <Button
            aria-label={ctaPrimary.title}
            variant="contained"
            color="negative"
            onClick={ctaPrimary.onClick}
            component="a"
          >
            {ctaPrimary.label}
          </Button>
        </Box>
      )}
      {ctaSecondary && (
        <Box>
          <Button
            aria-label={ctaSecondary.title}
            color="negative"
            variant="outlined"
            onClick={ctaSecondary.onClick}
            component="a"
          >
            {ctaSecondary.label}
          </Button>
        </Box>
      )}
    </Stack>
  </Stack>
);

const HeroJustText = (props: HeroJustTextProps) => (
  <Box sx={{ maxWidth: "40rem", margin: "0 auto", py: HERO_TEXT_PADDING }}>
    <HeroTextContent {...props} />
  </Box>
);

const HeroWithImage = ({
  inverse,
  image,
  altText = "Hero Image",
  ...props
}: HeroWithImageProps) => (
  <>
    <Box
      sx={{
        display: "grid",
        columnGap: 3,
        rowGap: 5,
        gridTemplateColumns: {
          xs: "repeat(6, minmax(0, 1fr))",
          md: "repeat(12, minmax(0, 1fr))",
        },
        py: HERO_TEXT_PADDING,
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
        <HeroTextContent {...props} />
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
        alignSelf="center"
      >
        <img
          alt={altText}
          src={image}
          style={{
            objectFit: "contain",
            objectPosition: "center",
            width: "100%",
            height: "100%",
            maxHeight: "600px",
            userSelect: "none",
          }}
        />
      </Box>
    </Box>
  </>
);

export const Hero = (props: HeroProps) => (
  <Box
    bgcolor="primary.main"
    sx={{
      backgroundImage: `url(${props.background})`,
      backgroundSize: "cover",
    }}
  >
    <Container maxWidth="xl">
      {props.type === "image" ? (
        <HeroWithImage {...props} />
      ) : (
        <HeroJustText {...props} />
      )}
    </Container>
  </Box>
);
