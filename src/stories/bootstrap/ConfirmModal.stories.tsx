import { FC } from 'react';
import { Meta } from '@storybook/react';
import { BsButton } from '../../bootstrap/BsButton';
import { useConfirmModal } from '../../hooks/useConfirmModal';
import { BsConfirmModal } from '../../bootstrap';
import { ModalContextProvider } from '../../components';

export const BsConfirmModalExample: FC = () => {
  const confirmModalState = useConfirmModal();

  return (
    <div>
      <div className="mb-3">
        <BsButton
          variant="primary"
          onClick={() =>
            confirmModalState.showConfirm({
              onConfirm: async () => {
                await new Promise((resolve) => {
                  setTimeout(() => {
                    // eslint-disable-next-line no-alert
                    alert('Confirmed successfully');
                    resolve(null);
                  }, 500);
                });
              },
            })
          }
        >
          Open modal (successful confirm)
        </BsButton>
      </div>
      <div className="mb-3">
        <BsButton
          variant="primary"
          onClick={() =>
            confirmModalState.showConfirm({
              onConfirm: async () => {
                await new Promise((resolve, reject) => {
                  setTimeout(() => {
                    reject(new Error('I failed'));
                  }, 500);
                });
              },
            })
          }
        >
          Open modal (failed confirm)
        </BsButton>
      </div>
      <div>
        <BsButton
          variant="primary"
          onClick={() =>
            confirmModalState.showConfirm({
              dontAutoCloseOnSuccess: true,
              onConfirm: async () => {
                await new Promise((resolve) => {
                  setTimeout(() => {
                    // eslint-disable-next-line no-alert
                    alert('Confirmed successfully');
                    resolve(null);
                  }, 500);
                });
              },
            })
          }
        >
          {`Open modal (successful confirm & don't auto-close on success)`}
        </BsButton>
      </div>

      <ModalContextProvider>
        <BsConfirmModal {...confirmModalState} />
      </ModalContextProvider>
    </div>
  );
};

const meta: Meta = {
  title: 'Bootstrap/BsConfirmModal',
  component: BsConfirmModalExample,
};

export default meta;
