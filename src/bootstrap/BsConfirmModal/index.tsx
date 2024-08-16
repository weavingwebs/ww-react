import { FC } from 'react';
import clsx from 'clsx';
import { BsErrorMessage, BsLoading } from '../index';
import { useConfirmModal } from '../../hooks';
import { ConfirmModal } from '../../components/ConfirmModal';

type BsConfirmModalProps = ReturnType<typeof useConfirmModal>;

export const BsConfirmModal: FC<BsConfirmModalProps> = ({
  isPositiveAction,
  ...props
}) => {
  return (
    <ConfirmModal
      ErrorComponent={BsErrorMessage}
      LoadingComponent={() => BsLoading({ size: 'sm', colour: 'light' })}
      headerClassName="modal-header"
      modalClassName="modal"
      headerTitleClassName="modal-title"
      contentClassName="modal-content"
      dialogClassName="modal-dialog modal-dialog-centered"
      cancelButtonClassName="btn btn-outline-danger"
      confirmButtonClassName={clsx(
        'ms-2 btn',
        isPositiveAction ? 'btn-success' : 'btn-danger'
      )}
      confirmLineContainerClassName="mb-3"
      actionsContainerClassName="d-flex justify-content-end"
      {...props}
    />
  );
};
