'use client';

import {
  type DialogProps,
  type DialogTitleProps,
  type DialogContentProps,
  type DialogActionsProps,
  type DialogContentTextProps,
} from '@mui/material';
import { type ReactNode, useId } from 'react';
import { MIButton, type MIButtonProps } from '@components/MIButton';
import { MIIconButton, type MIIconButtonProps } from '@components/MIIconButton';
import { CloseRounded } from '@mui/icons-material';
import {
  StyledDialog,
  StyledDialogActions,
  StyledDialogContent,
  StyledDialogContentTextDescription,
  StyledDialogTitle,
} from './StyledDialog';

export type MIDialogActionProps = {
  label: string;
  onClick: NonNullable<MIButtonProps['onClick']>;
  disabled?: MIButtonProps['disabled'];
  color?: MIButtonProps['color'];
};

export type MIDialogProps = Omit<DialogProps, 'fullScreen'> & {
  /** Text displayed as the dialog title. */
  title?: string;
  /** Descriptive text displayed below the title. */
  description?: string;
  /** Accessible label for the dialog's close button. */
  closeButtonAriaLabel: string;
  /** Callback invoked when the dialog's close button is clicked. */
  onCloseButtonClick: NonNullable<MIIconButtonProps['onClick']>;
  /** Primary action displayed in the dialog footer. */
  primaryAction?: MIDialogActionProps;
  /** Secondary action displayed in the dialog footer. */
  secondaryAction?: MIDialogActionProps;
  /** Custom footer content; when provided, replaces the configured actions. */
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
      fullScreen={false}
      onClose={onClose}
      aria-labelledby={ariaLabelledBy ?? (title != null ? titleId : undefined)}
      aria-describedby={ariaDescribedBy ?? (description != null ? descriptionId : undefined)}
    >
      {title != null && <MIDialogTitle id={titleId}>{title}</MIDialogTitle>}
      {description != null && (
        <MIDialogDescription sx={{ mt: 0 }} id={descriptionId}>
          {description}
        </MIDialogDescription>
      )}

      <MIIconButton
        aria-label={closeButtonAriaLabel}
        onClick={onCloseButtonClick}
        sx={(theme) => ({
          position: 'absolute',
          right: theme.spacing(2),
          top: theme.spacing(2.2),
          color: theme.colors.neutral.black,
        })}
      >
        <CloseRounded />
      </MIIconButton>
      {(description != null || children != null) && <MIDialogContent>{children}</MIDialogContent>}

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
                  autoFocus
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
const MIDialogDescription: React.FC<DialogContentTextProps> = (props) => (
  <StyledDialogContentTextDescription {...props} />
);

const MIDialogContent: React.FC<DialogContentProps> = (props) => <StyledDialogContent {...props} />;

const MIDialogActions: React.FC<DialogActionsProps> = (props) => <StyledDialogActions {...props} />;

export default MIDialog;
