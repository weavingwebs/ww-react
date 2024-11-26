import { ComponentType, FC, PropsWithChildren } from 'react';
import { Modal, ModalBody, ModalHeader, ModalStyleProps } from '../Modal';

export type WwErrorModalBaseProps = PropsWithChildren & {
  error: Error | null;
  onClose: () => void;
  title?: string;
};

export type WwErrorModalProps = WwErrorModalBaseProps &
  ModalStyleProps & {
    CloseButtonComponent: ComponentType<{ onClick: () => void }>;
    ErrorMessageComponent: ComponentType<{ error: Error | null }>;
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
        <ErrorMessageComponent error={error} />
        {children}
        <div className={actionsContainerClassName}>
          <CloseButtonComponent onClick={onClose} />
        </div>
      </ModalBody>
    </Modal>
  );
};
