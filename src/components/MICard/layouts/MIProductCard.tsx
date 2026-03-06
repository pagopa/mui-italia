import { Card, CardActions, CardContent, Chip, ChipProps, Stack, Typography } from '@mui/material';
import React from 'react';
import foundation from 'theme/foundation';
import { ProductAvatar } from '@components/ProductAvatar';

export function MIProductCard({
  chip,
  title,
  content,
  actions,
  avatarURL,
  avatarBgColor,
}: Readonly<{
  chip?: React.ReactElement<ChipProps, typeof Chip>;
  title: string;
  content?: string | React.ReactNode;
  avatarURL: string;
  avatarBgColor: string;
  actions: React.ReactNode;
}>) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${foundation.palette.divider}`,
        borderRadius: foundation.shape.borderRadius,
      }}
    >
      <CardContent sx={{ alignItems: 'start', py: 3, px: 3 }}>
        <Stack direction="row" spacing={1} alignItems="start" sx={{ pb: 1.5 }}>
          <ProductAvatar
            logoUrl={avatarURL}
            logoBgColor={avatarBgColor}
            logoAltText="product avatar"
            size="small"
          />
          <Stack direction="column" spacing={0.5} alignItems="flex-start">
            {chip && chip}
            <Typography
              variant="h6"
              color="text.primary"
              sx={{
                lineHeight: 2,
                pb: 0.3,
                fontWeight: foundation.typography.fontWeightMedium,
                fontSize: { xs: '18px', sm: '24px' },
                display: '-webkit-box',
                WebkitLineClamp: { xs: 2, sm: 3 },
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                wordBreak: 'break-word',
              }}
            >
              {title}
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ width: '100%' }}>
          {typeof content === 'string' ? (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                lineHeight: 1.4,
                fontWeight: foundation.typography.fontWeightLight,
                fontSize: '14px',
                display: '-webkit-box',
                WebkitLineClamp: { xs: 2, sm: 3 },
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                wordBreak: 'break-word',
              }}
            >
              {content}
            </Typography>
          ) : (
            content
          )}
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          marginTop: 'auto',
          px: 3,
          pb: 3,
          pt: 0,
        }}
      >
        {actions}
      </CardActions>
    </Card>
  );
}
