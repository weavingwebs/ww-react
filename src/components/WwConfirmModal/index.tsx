import { ComponentType, FC, useEffect } from 'react';
import clsx from 'clsx';
import { Modal, ModalBody, ModalHeader, ModalStyleProps } from '../Modal';
import { useAsync, useConfirmModal } from '../../hooks';

export type WwConfirmModalBaseProps = Omit<
  ReturnType<typeof useConfirmModal>,
  'isPositiveAction'
>;

export type WwConfirmModalProps = WwConfirmModalBaseProps &
  ModalStyleProps & {
    ErrorComponent: ComponentType<{ error: Error | null }>;
    LoadingComponent: ComponentType;
    actionsContainerClassName?: string;
    cancelButtonClassName: string;
    confirmButtonClassName: string;
    confirmLineContainerClassName?: string;
    headerClassName?: string;
    headerH1ClassName?: string;
    headerTitleClassName?: string;
  };

export const WwConfirmModal: FC<WwConfirmModalProps> = ({
  titleLine,
  confirmLine,
  confirmBtnLabel,
  onConfirm,
  cancelBtnLabel,
  confirmButtonStyle,
  isOpen,
  onCancel,
  dontAutoCloseOnSuccess,
  ErrorComponent,
  LoadingComponent,
  confirmButtonClassName,
  confirmLineContainerClassName,
  cancelButtonClassName,
  actionsContainerClassName,
  modalClassName,
  dialogClassName,
  unstyled,
  contentClassName,
  dialogStyles,
  headerClassName,
  headerTitleClassName,
  headerH1ClassName,
}) => {
  const {
    isLoading: isConfirming,
    error,
    runAsync,
    resetAsync,
  } = useAsync<void>({
    isLoading: false,
    result: null,
  });

  // Reset error on close.
  useEffect(() => {
    if (!isOpen) {
      resetAsync();
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      blocking
      modalClassName={modalClassName}
      dialogClassName={dialogClassName}
      contentClassName={contentClassName}
      unstyled={unstyled}
      dialogStyles={dialogStyles}
    >
      <ModalHeader
        onClose={onCancel}
        title={titleLine || 'Are you sure?'}
        disableCloseButton={!isConfirming}
        headerClassName={headerClassName}
        titleClassName={headerTitleClassName}
        h1ClassName={headerH1ClassName}
      />
      <ModalBody>
        {confirmLine && (
          <div className={confirmLineContainerClassName}>{confirmLine}</div>
        )}

        <ErrorComponent error={error} />

        <div className={actionsContainerClassName}>
          {!isConfirming && (
            <button
              type="button"
              className={cancelButtonClassName}
              onClick={onCancel}
            >
              {cancelBtnLabel || 'Cancel'}
            </button>
          )}
          <button
            type="button"
            onClick={(ev) => {
              ev.preventDefault();
              runAsync(onConfirm).then((res) => {
                // Close if promise didn't error and we didn't opt out of auto closing via prop.
                if (!res.error && !dontAutoCloseOnSuccess) {
                  onCancel();
                }
              });
            }}
            disabled={isConfirming}
            className={clsx(confirmButtonClassName)}
            style={{ minWidth: '85px', ...confirmButtonStyle }}
          >
            {isConfirming ? <LoadingComponent /> : confirmBtnLabel || 'Confirm'}
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
};
