import { Box, Stack, Link as MuiLink } from '@mui/material';
import { FC, ReactNode } from 'react';

const FIGMA_URL =
  'https://www.figma.com/design/pvhsJpPGQbEwNLiyP7BOIw/MUI-Italia-Next---Design-System';
const GITHUB_COMPONENT_URL = 'https://github.com/pagopa/mui-italia/blob/develop/src/components';
const MUI_URL = 'https://mui.com/material-ui';

type Props = {
  githubRelativePath: string;
  figmaNodeId: string;
  muiRelativePath: string;
  children: ReactNode;
};

const Overview: FC<Props> = ({ children, githubRelativePath, figmaNodeId, muiRelativePath }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ typography: 'body1', '& p': { margin: 0 } }}>{children}</Box>

      <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
        <MuiLink href={`${FIGMA_URL}?node-id=${figmaNodeId}`} target="_blank" rel="noreferrer">
          Figma reference
        </MuiLink>
        <MuiLink
          href={`${GITHUB_COMPONENT_URL}/${githubRelativePath}`}
          target="_blank"
          rel="noreferrer"
        >
          GitHub component
        </MuiLink>
        <MuiLink href={`${MUI_URL}/${muiRelativePath}`} target="_blank" rel="noreferrer">
          MUI component
        </MuiLink>
      </Stack>
    </Box>
  );
};

export default Overview;
