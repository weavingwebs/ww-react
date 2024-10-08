import { FC } from 'react';
import { Meta } from '@storybook/react';
import { useConfirmModal } from '../../hooks/useConfirmModal';
import { ModalContextProvider } from '../../components';
import { BsWwConfirmModal } from '../../bootstrap';

export const BsWwConfirmModalExample: FC = () => {
  const confirmModalState = useConfirmModal();

  return (
    <div>
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-primary"
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
        </button>
      </div>
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() =>
            confirmModalState.showConfirm({
              size: 'fullscreen',
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
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
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
        </button>
      </div>

      <ModalContextProvider>
        <BsWwConfirmModal {...confirmModalState} />
      </ModalContextProvider>
    </div>
  );
};

const meta: Meta = {
  title: 'Bootstrap/BsWwConfirmModal',
  component: BsWwConfirmModalExample,
};

export default meta;
