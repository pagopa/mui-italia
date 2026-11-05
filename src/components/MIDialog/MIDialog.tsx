import {
  type DialogProps,
  type DialogTitleProps,
  type DialogContentProps,
  type DialogActionsProps,
  type DialogContentTextProps,
  Stack,
} from '@mui/material';
import { type ReactNode, useId } from 'react';
import { MIButton, type MIButtonProps } from '@components/MIButton';
import { MIIconButton, type MIIconButtonProps } from '@components/MIIconButton';
import { CloseRounded } from '@mui/icons-material';
import {
  StyledDialog,
  StyledDialogActions,
  StyledDialogContent,
  StyledDialogContentText,
  StyledDialogTitle,
} from './StyledDialog';

export type MIDialogActionProps = {
  label: string;
  onClick: NonNullable<MIButtonProps['onClick']>;
  disabled?: MIButtonProps['disabled'];
  color?: MIButtonProps['color'];
};

export type MIDialogProps = DialogProps & {
  title?: string;
  description?: string;
  closeButtonAriaLabel: string;
  onCloseButtonClick: NonNullable<MIIconButtonProps['onClick']>;
  primaryAction?: MIDialogActionProps;
  secondaryAction?: MIDialogActionProps;
  renderFooter?: ReactNode;
};

export const MIDialog: React.FC<MIDialogProps> = ({
  title,
  description,
  closeButtonAriaLabel,
  onClose,
  onCloseButtonClick,
  primaryAction,
  secondaryAction,
  renderFooter,
  children,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const generatedId = useId();
  const titleId = `${generatedId}-title`;
  const descriptionId = `${generatedId}-description`;

  return (
    <StyledDialog
      {...props}
      onClose={onClose}
      aria-labelledby={ariaLabelledBy ?? (title != null ? titleId : undefined)}
      aria-describedby={ariaDescribedBy ?? (description != null ? descriptionId : undefined)}
    >
      <Stack
        sx={(theme) => ({
          padding: theme.spacing(3, 3, 1),
          flexDirection: 'row',
          justifyContent: title != null ? 'space-between' : 'flex-end',
          alignItems: 'center',
        })}
      >
        {title != null && <MIDialogTitle id={titleId}>{title}</MIDialogTitle>}
        <MIIconButton
          aria-label={closeButtonAriaLabel}
          onClick={onCloseButtonClick}
          sx={(theme) => ({ alignSelf: 'end', color: theme.colors.neutral.black })}
        >
          <CloseRounded />
        </MIIconButton>
      </Stack>
      {description != null && (
        <MIDialogContent>
          <MIDialogContentText id={descriptionId}>{description}</MIDialogContentText>
        </MIDialogContent>
      )}
      {children}
      {renderFooter !== undefined
        ? renderFooter
        : (primaryAction || secondaryAction) && (
            <MIDialogActions>
              {secondaryAction && (
                <MIButton
                  variant="text"
                  onClick={secondaryAction.onClick}
                  disabled={secondaryAction.disabled}
                  color={secondaryAction.color}
                  sx={(theme) => ({
                    [theme.breakpoints.down('md')]: {
                      width: '100%',
                    },
                  })}
                >
                  {secondaryAction.label}
                </MIButton>
              )}
              {primaryAction && (
                <MIButton
                  onClick={primaryAction.onClick}
                  disabled={primaryAction.disabled}
                  color={primaryAction.color}
                  sx={(theme) => ({
                    [theme.breakpoints.down('md')]: {
                      width: '100%',
                    },
                  })}
                >
                  {primaryAction.label}
                </MIButton>
              )}
            </MIDialogActions>
          )}
    </StyledDialog>
  );
};

const MIDialogTitle: React.FC<DialogTitleProps> = (props) => <StyledDialogTitle {...props} />;

const MIDialogContent: React.FC<DialogContentProps> = (props) => <StyledDialogContent {...props} />;

const MIDialogActions: React.FC<DialogActionsProps> = (props) => <StyledDialogActions {...props} />;

const MIDialogContentText: React.FC<DialogContentTextProps> = (props) => (
  <StyledDialogContentText {...props} />
);

export default MIDialog;
