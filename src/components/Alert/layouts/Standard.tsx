import { Stack } from '@mui/material';
import { AlertCTAWithId, AlertModel, ViewState } from '../model';
import { Content, Cta, Title } from '../shared';

export function Standard({
  model,
  view,
  title,
  message,
  cta,
  titleId,
}: Readonly<{
  model: AlertModel;
  view: ViewState;
  title: string;
  message: string;
  cta: AlertCTAWithId;
  titleId: string;
  variant: 'standard';
}>) {
  return (
    <Stack
      direction={view.isHorizontal ? 'row' : 'column'}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      flex={1}
      minWidth={0}
    >
      <Stack direction="column" gap={0.5} flex={1} minWidth={0}>
        <Title
          id={titleId}
          text={title}
          fontSizeOverride={view.isHorizontal ? undefined : '18px'}
          colorStyle={model.colorStyle}
        />

        {message && <Content text={message} colorStyle={model.colorStyle} />}
      </Stack>

      <Cta
        id={cta.id}
        cta={cta}
        ariaLabelledBy={`${titleId} ${cta.id}`}
        colorStyle={model.colorStyle}
        alignSelf={view.isHorizontal ? 'center' : 'flex-start'}
      />
    </Stack>
  );
}
