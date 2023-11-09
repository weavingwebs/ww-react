import { FC } from 'react';
import { Meta } from '@storybook/react';
import { Button } from '../../bootstrap/Button';
import { useConfirmModal } from '../../hooks/useConfirmModal';
import { ConfirmModal } from '../../components';

export const ConfirmModalExample: FC = () => {
  const { showConfirm, ...confirmModalState } = useConfirmModal();

  return (
    <div>
      <div className="mb-3">
        <Button
          variant="primary"
          onClick={() =>
            showConfirm({
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
        </Button>
      </div>
      <div>
        <Button
          variant="primary"
          onClick={() =>
            showConfirm({
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
        </Button>
      </div>

      <ConfirmModal {...confirmModalState} />
    </div>
  );
};

const meta: Meta = {
  title: 'Bootstrap/Modal',
  component: ConfirmModalExample,
};

export default meta;
