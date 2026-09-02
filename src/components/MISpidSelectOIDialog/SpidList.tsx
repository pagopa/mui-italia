import { useMemo } from 'react';

import {
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  Skeleton,
  Typography,
  useTheme,
} from '@mui/material';

import { shuffleList } from '../../utils/array';
import { IDP } from './MISpidSelectOIDialog.types';
import { getSpidDisplayName } from './utils';

type Props = {
  idps: Array<IDP>;
  loading: boolean;
  authorizingEntityId: string | null;
  oneIdentityCdnBaseUrl: string;
  onSelect: (idp: IDP) => void;
};

const ListItemSx = {
  justifyContent: 'space-between',
  height: '60px',
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: '8px',
  mb: 1,
  p: 2,
};

const SpidList: React.FC<Props> = ({
  idps,
  loading,
  authorizingEntityId,
  oneIdentityCdnBaseUrl,
  onSelect,
}) => {
  const theme = useTheme();
  const shuffledIDPS = useMemo(() => shuffleList<IDP>(idps), [idps]);

  const getImageUrl = (entityID: string) =>
    `${oneIdentityCdnBaseUrl}/assets/idps/${btoa(entityID)}.png`;

  if (loading) {
    return (
      <List>
        {Array.from({ length: 6 }).map((_, i) => (
          <ListItem key={`idp-skeleton-${i}`} disablePadding sx={ListItemSx}>
            <Skeleton
              variant="rectangular"
              width="240px"
              height="16px"
              sx={{ borderRadius: '8px' }}
              data-testid={`spid-select-skeleton-${i}`}
            />
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <List>
      {shuffledIDPS.map((idp) => {
        const displayName = getSpidDisplayName(idp);

        return (
          <ListItem key={idp.entityID} disablePadding>
            <ListItemButton
              id={`spid-select-${idp.entityID}`}
              onClick={() => onSelect(idp)}
              disabled={authorizingEntityId !== null}
              sx={ListItemSx}
              aria-label={displayName}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Typography
                  noWrap
                  sx={{
                    color: theme.colors.neutral.grey[700],
                    fontSize: '14px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                  }}
                >
                  {displayName}
                </Typography>

                <Box aria-hidden>
                  {authorizingEntityId === idp.entityID ? (
                    <CircularProgress
                      size={24}
                      data-testid={`spid-select-${idp.entityID}-loading`}
                    />
                  ) : (
                    <img
                      height="28px"
                      src={getImageUrl(idp.entityID)}
                      alt={displayName}
                      data-testid={`spid-select-${idp.entityID}-logo`}
                    />
                  )}
                </Box>
              </Box>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SpidList;
