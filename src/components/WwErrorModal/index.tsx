import { ComponentType, FC, PropsWithChildren } from 'react';
import { Modal, ModalBody, ModalHeader, ModalStyleProps } from '../Modal';
import { BsErrorMessage } from '../../bootstrap/BsErrorMessage';

export type WwErrorModalBaseProps = {
  error: Error | null;
  onClose: () => void;
  title?: string;
};

export type WwErrorModalProps = WwErrorModalBaseProps &
  ModalStyleProps &
  PropsWithChildren & {
    CloseButtonComponent: ComponentType<{ onClick: () => void }>;
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
  headerClassName,
  headerH1ClassName,
  headerTitleClassName,
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
        <BsErrorMessage error={error} className="mb-0" />
        {children}
        <div>
          <CloseButtonComponent onClick={onClose} />
        </div>
      </ModalBody>
    </Modal>
  );
};
