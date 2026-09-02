'use client';

import { Box, Container, Stack, Typography } from '@mui/material';

export interface ShowcaseItem {
  icon?: JSX.Element;
  title: string;
  subtitle: string | JSX.Element;
}

export interface ShowcaseProps {
  title: string;
  items: Array<ShowcaseItem>;
}

export const Showcase = ({ title, items }: ShowcaseProps) => (
  <Box sx={{ bgcolor: '#FAFAFA' }}>
    <Container
      maxWidth="xl"
      sx={{
        py: {
          xs: 4,
          sm: 4,
          md: 8,
        },
      }}
    >
      <Stack spacing={8} sx={{ alignContent: 'center', textAlign: 'center' }}>
        <Typography variant="h4">{title}</Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: 'repeat(12, 1fr)',
          }}
        >
          <Box sx={{ gridColumn: '2 / span 10' }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 6, md: 4 }}
              sx={{ alignContent: 'center', justifyContent: 'center' }}
            >
              {items.map((item, index) => (
                <Stack
                  key={index}
                  spacing={{ xs: 1, md: 4 }}
                  sx={{
                    flex: 1,
                    alignContent: 'center',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Box
                    sx={{
                      mx: 'auto',
                      color: 'primary.dark',
                      svg: {
                        height: '64px',
                        width: '64px',
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Stack spacing={1}>
                    <Typography variant="h6">{item.title}</Typography>
                    <>
                      {item.subtitle && typeof item.subtitle === 'string' && (
                        <Typography variant="body2">{item.subtitle}</Typography>
                      )}
                      {item.subtitle && typeof item.subtitle !== 'string' && item.subtitle}
                    </>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Container>
  </Box>
);
