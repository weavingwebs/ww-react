import { FC } from 'react';
import clsx from 'clsx';
import { useConfirmModal } from '../../hooks';
import { WwConfirmModal } from '../../components';
import { BsLoading } from '../BsLoading';
import { BsErrorMessage } from '../BsErrorMessage';

const BsWwConfirmModalErrorComponent: FC<{ error: Error | null }> = ({
  error,
}) => <BsErrorMessage error={error} className="mb-3" />;

const BsWwConfirmModalLoadingComponent: FC = () => (
  <BsLoading size="sm" colour="light" />
);

export type BsWwConfirmModalProps = ReturnType<typeof useConfirmModal>;

export const BsWwConfirmModal: FC<BsWwConfirmModalProps> = ({
  isPositiveAction,
  size,
  ...props
}) => {
  const confirmButtonClassName = clsx(
    'ms-2 btn',
    isPositiveAction ? 'btn-success' : 'btn-danger'
  );

  return (
    <WwConfirmModal
      unstyled
      ErrorComponent={BsWwConfirmModalErrorComponent}
      LoadingComponent={BsWwConfirmModalLoadingComponent}
      headerClassName="modal-header"
      modalClassName="modal"
      headerTitleClassName="modal-title"
      contentClassName="modal-content"
      dialogClassName={clsx(
        'modal-dialog modal-dialog-centered',
        `modal-${size || 'md'}`
      )}
      cancelButtonClassName="btn btn-outline-danger"
      confirmButtonClassName={confirmButtonClassName}
      confirmLineContainerClassName="mb-3"
      actionsContainerClassName="d-flex justify-content-end"
      {...props}
    />
  );
};
