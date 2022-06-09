import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

interface sectionCTA {
  label: string;
  title: string;
  href: string;
}

interface Section {
  icon?: JSX.Element;
  title: string;
  subtitle: string;
  cta: sectionCTA;
}

export interface HorizontalNavProps {
  sections: Array<Section>;
}

export const HorizontalNav = ({ sections }: HorizontalNavProps) => (
  <Box>
    <Container maxWidth="xl">
      <Stack direction="row">
        {sections.map((section, index) => (
          <Box
            key={index}
            px={18}
            py={8}
            bgcolor={index % 2 === 0 ? "primary.dark" : "primary.main"}
          >
            <Box>{section.icon}</Box>
            <Typography variant="h5" color="primary.contrastText">
              {section.title}
            </Typography>
            <Typography variant="body1" color="primary.contrastText">
              {section.title}
            </Typography>
            <Stack direction="row">
              <Button variant="text" color="primary">
                {section.cta.label}
              </Button>
              <ArrowForward sx={{ color: "primary.contrastTex" }} />
            </Stack>
          </Box>
        ))}
      </Stack>
    </Container>
  </Box>
);
