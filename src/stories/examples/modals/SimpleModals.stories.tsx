import { FC } from 'react';
import { Meta } from '@storybook/react';
import { BsButton } from '../../../bootstrap/BsButton';
import { useModal } from '../../../hooks/useModal';
import {
  Modal,
  ModalBody,
  ModalContextProvider,
  ModalHeader,
} from '../../../components';

export const SimpleModals: FC = () => {
  const defaultModal = useModal();
  const bsModal = useModal();
  return (
    <div>
      <BsButton variant="primary" onClick={defaultModal.onOpen}>
        Open default modal
      </BsButton>
      <BsButton variant="secondary" onClick={bsModal.onOpen} className="ms-3">
        Open Bootstrap modal
      </BsButton>

      <ModalContextProvider>
        <Modal isOpen={defaultModal.isOpen} onClose={defaultModal.onClose}>
          <ModalHeader onClose={defaultModal.onClose} title="Default modal" />
          <ModalBody>Using built-in styles. no overrides applied.</ModalBody>
        </Modal>

        <Modal
          isOpen={bsModal.isOpen}
          onClose={bsModal.onClose}
          unstyled
          modalClassName="modal"
          contentClassName="modal-content"
          dialogClassName="modal-dialog modal-dialog-centered"
        >
          <ModalHeader
            onClose={bsModal.onClose}
            headerClassName="modal-header"
            titleClassName="modal-title"
            title="Bootstrap modal"
          />
          <ModalBody>
            Bootstrap classes applied.
            <div className="d-flex justify-content-end">
              <BsButton variant="danger" outlined onClick={bsModal.onClose}>
                Close
              </BsButton>
            </div>
          </ModalBody>
        </Modal>
      </ModalContextProvider>
    </div>
  );
};

const meta: Meta = {
  title: 'Examples/Modals/Simple Modals',
  component: SimpleModals,
};

export default meta;
