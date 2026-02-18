import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import foundation from 'theme/foundation';

export function CatalogCard({
  title,
  header,
  content,
  actions,
  avatarURL,
}: Readonly<{
  title: string;
  header: string;
  content: string;
  avatarURL?: string;
  actions: React.ReactNode;
}>) {
  return (
    <Card
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        height: '100%',
        borderRadius: foundation.spacing(1),
        border: `1px solid ${foundation.palette.divider}`,
        maxWidth: 360,
        maxHeight: 236,
      }}
    >
      <CardHeader
        sx={{ px: { xs: 2, sm: 3 }, pt: { xs: 2, sm: 3 }, pb: 0 }}
        disableTypography
        title={
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: 1.5,
              alignItems: 'start',
            }}
          >
            <Avatar
              src={avatarURL}
              variant="square"
              sx={{
                bgcolor: '#f4f5f8',
                borderRadius: 2,
                border: '1px solid #e6e7e9',
              }}
            >
              <AccountBalanceOutlinedIcon sx={{ color: '#bbc2d6' }} fontSize="small" />
            </Avatar>
            <Box sx={{ display: 'grid', gap: 0 }}>
              <Typography
                color="text.primary"
                sx={{
                  lineHeight: 1.05,
                  fontWeight: foundation.typography.fontWeightMedium,
                  fontSize: { xs: '18px', sm: '22px' },
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  wordBreak: 'break-word',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  lineHeight: 1.4,
                  fontWeight: foundation.typography.fontWeightLight,
                  fontSize: { xs: '14px', sm: '16px' },
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  wordBreak: 'break-word',
                }}
              >
                {header}
              </Typography>
            </Box>
          </Box>
        }
      />
      <CardContent sx={{ px: { xs: 2, sm: 3 }, py: 1.5 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontWeight: foundation.typography.fontWeightLight,
            fontSize: { xs: '13px', sm: '14px' },
            lineHeight: 1.4,
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
          px: { xs: 2, sm: 3 },
          pt: 1.5,
          pb: { xs: 2, sm: 3 },
        }}
      >
        {actions}
      </CardActions>
    </Card>
  );
}
