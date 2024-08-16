import { FC } from 'react';
import { Meta } from '@storybook/react';
import { BsButton, BsConfirmModal } from '../../../bootstrap';
import { useConfirmModal } from '../../../hooks';
import { ModalContextProvider } from '../../../components';
import { ConfirmModal } from '../../../components/ConfirmModal';

const ErrMsg: FC<{ error: Error | null }> = ({ error }) => {
  if (!error) {
    return null;
  }
  return <div>Error: {error?.message}</div>;
};

const Loading: FC = () => <div>Loading...</div>;

export const ConfirmModals: FC = () => {
  const defaultModal = useConfirmModal();
  const bsModal = useConfirmModal();

  const onConfirm = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert('Confirmed successfully');
        resolve(null);
      }, 500);
    });
  };
  return (
    <div>
      <BsButton
        variant="primary"
        onClick={() =>
          defaultModal.showConfirm({
            onConfirm,
          })
        }
      >
        Open default confirm modal
      </BsButton>
      <BsButton
        variant="secondary"
        onClick={() =>
          bsModal.showConfirm({
            onConfirm,
          })
        }
        className="ms-3"
      >
        Open Bootstrap confirm modal
      </BsButton>

      <ModalContextProvider>
        <BsConfirmModal {...bsModal} />
        <ConfirmModal
          {...defaultModal}
          confirmButtonClassName=""
          cancelButtonClassName=""
          LoadingComponent={Loading}
          ErrorComponent={ErrMsg}
        />
      </ModalContextProvider>
    </div>
  );
};

const meta: Meta = {
  title: 'Examples/Modals/Confirm Modals',
  component: ConfirmModals,
};

export default meta;
