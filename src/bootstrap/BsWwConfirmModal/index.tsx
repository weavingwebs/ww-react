import { FC } from 'react';
import clsx from 'clsx';
import { useConfirmModal } from '../../hooks';
import { WwConfirmModal } from '../../components/WwConfirmModal';
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
  ...props
}) => {
  const confirmButtonClassName = clsx(
    'ms-2 btn',
    isPositiveAction ? 'btn-success' : 'btn-danger'
  );

  return (
    <WwConfirmModal
      ErrorComponent={BsWwConfirmModalErrorComponent}
      LoadingComponent={BsWwConfirmModalLoadingComponent}
      headerClassName="modal-header"
      modalClassName="modal"
      headerTitleClassName="modal-title"
      contentClassName="modal-content"
      dialogClassName="modal-dialog modal-dialog-centered"
      cancelButtonClassName="btn btn-outline-danger"
      confirmButtonClassName={confirmButtonClassName}
      confirmLineContainerClassName="mb-3"
      actionsContainerClassName="d-flex justify-content-end"
      {...props}
    />
  );
};
