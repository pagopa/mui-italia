'use client';

import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import ArrowForward from './ArrowForward';

export interface WalkthroughItem {
  icon?: JSX.Element;
  title: string;
  subtitle: string | JSX.Element;
  isSequential?: boolean;
}

export interface WalkthroughProps {
  title: string;
  items: Array<WalkthroughItem>;
}

export const Walkthrough = ({ title, items }: WalkthroughProps) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  const containerPadding = {
    xs: theme.spacing(2),
    sm: theme.spacing(3),
    md: 0,
  };

  return (
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
        disableGutters={isTablet ? false : true}
      >
        <Stack spacing={{ xs: 4, md: 8 }} sx={{ alignContent: 'center' }}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            {title}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: 'repeat(6, minmax(0, 1fr))',
                md: 'repeat(12, minmax(0, 1fr))',
              },
            }}
          >
            <Box
              sx={{
                gridColumn: {
                  xs: 'span 6',
                  md: '2 / span 10',
                },
              }}
            >
              <Stack
                direction="row"
                spacing={{ xs: 4, lg: 8 }}
                sx={{
                  overflowX: { xs: 'scroll', md: 'hidden' },
                  overflowY: 'hidden',
                  scrollSnapType: 'x mandatory',
                  scrollPadding: containerPadding,
                  paddingLeft: containerPadding,
                  scrollbarWidth: 'none',
                  alignItems: 'flex-start',
                  justifyContent: { xs: 'flex-start', md: 'center' },
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                  '&::after': {
                    content: '""',
                    paddingLeft: containerPadding,
                  },
                }}
              >
                {items.map(({ icon, title: itemTitle, subtitle, isSequential = true }, index) => (
                  <Stack
                    key={index}
                    spacing={1}
                    sx={{
                      minWidth: { xs: '80%', sm: '40%', md: 'auto' },
                      flex: 1,
                      scrollSnapAlign: 'start',
                      alignContent: 'center',
                      justifyContent: 'flex-start',
                    }}
                  >
                    {isSequential ? (
                      <Typography
                        variant="caption"
                        color="primary.dark"
                        sx={{ alignSelf: 'flex-start' }}
                      >
                        {(index + 1).toString().padStart(2, '0')}{' '}
                      </Typography>
                    ) : (
                      <Box sx={{ mt: 2.5 }} />
                    )}
                    <Stack
                      direction="row"
                      sx={{ justifyContent: 'space-between', color: 'primary.dark' }}
                    >
                      <Box
                        sx={{
                          alignSelf: 'flex-start',
                          svg: {
                            height: theme.spacing(8),
                            width: theme.spacing(8),
                          },
                        }}
                      >
                        {icon}
                      </Box>
                      {index < items.length - 1 &&
                        isSequential &&
                        (typeof items[index + 1].isSequential === 'undefined' ||
                          items[index + 1].isSequential) && (
                          <Box
                            sx={{
                              display: 'flex',
                              width: theme.spacing(8),
                              height: theme.spacing(8),
                              alignItems: 'center',
                              justifyContent: 'flex-end',
                            }}
                          >
                            <ArrowForward />
                          </Box>
                        )}
                    </Stack>
                    <Stack spacing={1}>
                      <Typography variant="h6">{itemTitle}</Typography>
                      <>
                        {subtitle && typeof subtitle === 'string' && (
                          <Typography variant="body2">{subtitle}</Typography>
                        )}
                        {subtitle && typeof subtitle !== 'string' && subtitle}
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
};
