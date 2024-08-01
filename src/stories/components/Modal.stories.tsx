import { Meta } from '@storybook/react';
import { FC } from 'react';
import {
  Modal,
  ModalBody,
  ModalContextProvider,
  ModalHeader,
} from '../../components/Modal';
import { useModal } from '../../hooks';

export const ModalStory: FC = () => {
  const boostrapSmModal = useModal();
  const boostrapMdModal = useModal();
  const boostrapLgModal = useModal();
  const boostrapXlModal = useModal();
  const boostrapFullscreenModal = useModal();
  const defaultModal = useModal();

  return (
    <ModalContextProvider>
      <div>
        <button type="button" onClick={boostrapSmModal.onOpen}>
          Open boostrap modal sm
        </button>
      </div>
      <div>
        <button type="button" onClick={boostrapMdModal.onOpen}>
          Open boostrap modal md
        </button>
      </div>
      <div>
        <button type="button" onClick={boostrapFullscreenModal.onOpen}>
          Open boostrap modal FULLSCREEN
        </button>
      </div>
      <div>
        <button type="button" onClick={defaultModal.onOpen}>
          Open default modal
        </button>
      </div>

      <Modal
        isOpen={boostrapSmModal.isOpen}
        onClose={boostrapSmModal.onClose}
        options={{
          blocking: false,
          unstyled: true,
          classNames: {
            modal: 'modal',
            dialog: 'modal-dialog modal-sm modal-dialog-centered',
            content: 'modal-content',
          },
        }}
      >
        <ModalHeader
          onClose={boostrapSmModal.onClose}
          title="Bootstrap SM Modal"
          options={{ classNames: { header: 'modal-header' } }}
        >
          Modal header extra content
        </ModalHeader>
        <ModalBody options={{ classNames: { body: 'modal-body' } }}>
          <div>
            <button type="button" onClick={boostrapMdModal.onOpen}>
              Open boostrap modal MD (default)
            </button>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={boostrapMdModal.isOpen}
        onClose={boostrapMdModal.onClose}
        options={{
          blocking: false,
          unstyled: true,
          classNames: {
            modal: 'modal',
            dialog: 'modal-dialog modal-dialog-centered',
            content: 'modal-content',
          },
        }}
      >
        <ModalHeader
          onClose={boostrapMdModal.onClose}
          title="Bootstrap MD Modal"
          options={{ classNames: { header: 'modal-header' } }}
        >
          Modal header extra content
        </ModalHeader>
        <ModalBody options={{ classNames: { body: 'modal-body' } }}>
          <div>
            <button type="button" onClick={boostrapLgModal.onOpen}>
              Open boostrap modal LG
            </button>
          </div>
        </ModalBody>
      </Modal>

      {/* LG */}
      <Modal
        isOpen={boostrapLgModal.isOpen}
        onClose={boostrapLgModal.onClose}
        options={{
          blocking: false,
          unstyled: true,
          classNames: {
            modal: 'modal',
            dialog: 'modal-dialog modal-lg modal-dialog-centered',
            content: 'modal-content',
          },
        }}
      >
        <ModalHeader
          onClose={boostrapLgModal.onClose}
          title="Bootstrap LG Modal"
          options={{ classNames: { header: 'modal-header' } }}
        >
          Modal header extra content
        </ModalHeader>
        <ModalBody options={{ classNames: { body: 'modal-body' } }}>
          <div>
            <button type="button" onClick={boostrapXlModal.onOpen}>
              Open boostrap modal XL
            </button>
          </div>
        </ModalBody>
      </Modal>

      {/* XL */}
      <Modal
        isOpen={boostrapXlModal.isOpen}
        onClose={boostrapXlModal.onClose}
        options={{
          blocking: false,
          unstyled: true,
          classNames: {
            modal: 'modal',
            dialog: 'modal-dialog modal-xl modal-dialog-centered',
            content: 'modal-content',
          },
        }}
      >
        <ModalHeader
          onClose={boostrapXlModal.onClose}
          title="Bootstrap XL Modal"
          options={{ classNames: { header: 'modal-header' } }}
        >
          Modal header extra content
        </ModalHeader>
        <ModalBody options={{ classNames: { body: 'modal-body' } }}>
          <div>No further sizes to open</div>
        </ModalBody>
      </Modal>

      {/* Fullscreen */}
      <Modal
        isOpen={boostrapFullscreenModal.isOpen}
        onClose={boostrapFullscreenModal.onClose}
        options={{
          blocking: false,
          unstyled: true,
          classNames: {
            modal: 'modal',
            dialog: 'modal-dialog modal-fullscreen modal-dialog-centered',
            content: 'modal-content',
          },
        }}
      >
        <ModalHeader
          onClose={boostrapFullscreenModal.onClose}
          title="Bootstrap Fullscreen Modal"
          options={{ classNames: { header: 'modal-header' } }}
        >
          Modal header extra content
        </ModalHeader>
        <ModalBody options={{ classNames: { body: 'modal-body' } }}>
          <div>
            <button type="button" onClick={boostrapMdModal.onOpen}>
              Open boostrap modal MD (default)
            </button>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={defaultModal.isOpen}
        onClose={defaultModal.onClose}
        options={{
          blocking: false,
        }}
      >
        <ModalHeader onClose={defaultModal.onClose} title="Default modal" />
        <ModalBody>Modal body...</ModalBody>
      </Modal>
    </ModalContextProvider>
  );
};

export default {
  title: 'Components/Modal',
  component: ModalStory,
} as Meta<typeof ModalStory>;
