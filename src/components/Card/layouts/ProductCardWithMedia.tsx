import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import foundation from 'theme/foundation';
import { ProductAvatar } from '@components/ProductAvatar';

export function ProductCardWithMedia({
  title,
  content,
  actions,
  imgUrl,
  productAvatarURL,
  productAvatarBgColor,
}: Readonly<{
  title: string;
  content?: string | React.ReactNode;
  imgUrl: string;
  productAvatarURL: string;
  productAvatarBgColor: string;
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
      <CardMedia component="img" height="140" image={imgUrl} alt="mediaProductCard" />
      <CardContent sx={{ pt: 0, pb: 3, px: 3, display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            marginTop: '-32px',
            marginBottom: 2,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <ProductAvatar
            logoUrl={productAvatarURL}
            logoBgColor={productAvatarBgColor}
            logoAltText="product avatar"
            size="large"
          />
        </Box>
        <Typography
          variant="h6"
          color="text.primary"
          sx={{
            lineHeight: 1.2,
            pb: 1,
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

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            lineHeight: 1.4,
            fontWeight: foundation.typography.fontWeightLight,
            fontSize: '16px',
            display: '-webkit-box',
            WebkitLineClamp: { xs: 2, sm: 3 },
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            wordBreak: 'break-word',
          }}
        >
          {content}
        </Typography>
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
