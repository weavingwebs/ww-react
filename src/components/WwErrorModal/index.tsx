import { ComponentType, FC, PropsWithChildren, ReactNode } from 'react';
import { Modal, ModalBody, ModalHeader, ModalStyleProps } from '../Modal';

export type WwErrorModalBaseProps = PropsWithChildren & {
  additionalAction?: ReactNode;
  closeActionLabel?: string;
  error: Error | null;
  onClose: () => void;
  // eslint-disable-next-line react/no-unused-prop-types
  prefix?: string;
  title?: string;
};

export type WwModalCloseButtonComponentProps = {
  label?: string;
  onClick: () => void;
};

export type WwModalErrorMessageComponentProps = {
  error: Error | null;
  prefix?: string;
};

export type WwErrorModalProps = WwErrorModalBaseProps &
  ModalStyleProps & {
    CloseButtonComponent: ComponentType<WwModalCloseButtonComponentProps>;
    ErrorMessageComponent: ComponentType<WwModalErrorMessageComponentProps>;
    actionsContainerClassName?: string;
    headerClassName?: string;
    headerH1ClassName?: string;
    headerTitleClassName?: string;
  };

export const WwErrorModal: FC<WwErrorModalProps> = ({
  error,
  onClose,
  title,
  children,
  CloseButtonComponent,
  ErrorMessageComponent,
  headerClassName,
  headerH1ClassName,
  headerTitleClassName,
  actionsContainerClassName,
  modalClassName,
  dialogClassName,
  contentClassName,
  unstyled,
  dialogStyles,
  closeActionLabel,
  additionalAction,
  prefix,
}) => {
  if (!error) {
    return null;
  }
  // eslint-disable-next-line no-console
  console.error(error);
  return (
    <Modal
      isOpen
      onClose={onClose}
      modalClassName={modalClassName}
      dialogClassName={dialogClassName}
      contentClassName={contentClassName}
      dialogStyles={dialogStyles}
      unstyled={unstyled}
    >
      <ModalHeader
        title={title || 'An Error has Occurred'}
        onClose={onClose}
        headerClassName={headerClassName}
        titleClassName={headerTitleClassName}
        h1ClassName={headerH1ClassName}
      />
      <ModalBody>
        <ErrorMessageComponent error={error} prefix={prefix} />
        {children}
        <div className={actionsContainerClassName}>
          <CloseButtonComponent onClick={onClose} label={closeActionLabel} />
          {additionalAction}
        </div>
      </ModalBody>
    </Modal>
  );
};
