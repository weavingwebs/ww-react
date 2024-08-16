import BootstrapModal from 'react-bootstrap/cjs/Modal.js';
import { FC } from 'react';
import { Meta } from '@storybook/react';
import { BsButton } from '../../bootstrap/BsButton';
import { useModal } from '../../hooks/useModal';

// @todo: delete

export const Modal: FC = () => {
  const { isOpen, onClose, onOpen } = useModal();
  return (
    <div>
      <BsButton variant="primary" onClick={onOpen}>
        Open modal
      </BsButton>
      <BootstrapModal show={isOpen} onHide={onClose} centered animation={false}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>Title</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          Lorem ipsum dolor sit amet.
          <div className="d-flex justify-content-end">
            <BsButton variant="danger" outlined onClick={onClose}>
              Close
            </BsButton>
          </div>
        </BootstrapModal.Body>
      </BootstrapModal>
    </div>
  );
};

const meta: Meta = {
  title: 'Bootstrap/Modal',
  component: Modal,
  args: {
    isLoading: false,
    showError: false,
  },
};

export default meta;
