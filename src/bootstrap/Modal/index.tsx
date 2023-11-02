import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Dialog = PropsWithChildren & {
  onClose: () => void;
  title: string;
  // @todo: escKeyToClose?: boolean.
};

// @todo:
// <Dialog /> should not have any styles implemented.
// <Modal /> can be the more opinionated modal.

// Just a very simple modal implementation.
// No frills, no animation, not very modular.
// Uses modified bootstrap styles.
// Scrolling behind modal disabled.
// Supports modal stacking. Backdrop covers the modal in case of stacking.
// Always centered.
// If it's mounted in the DOM then the modal is open.
// Usage: isModalOpen && <ModalBase />
// SSR not supported.
export const Modal: FC<Dialog> = ({ onClose, title, children }) => {
  const documentRef = useRef<Document>();

  if (!documentRef.current) {
    documentRef.current = window.document;
  }

  useEffect(() => {
    documentRef.current?.body.classList.add('overflow-hidden');

    return () => {
      const otherModalsMounted = !!documentRef.current
        ?.getElementsByClassName('modal')
        .item(0);
      if (!otherModalsMounted) {
        documentRef.current?.body.classList.remove('overflow-hidden');
      }
    };
  }, []);

  return createPortal(
    <div
      className="modal d-block"
      style={{ backgroundColor: 'rgba(0, 0, 0, .75)' }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow border-0">
          <div className="modal-header p-4 rounded shadow-sm text-bg-danger align-items-start border-0">
            <div className="modal-title">
              <h2 className="h4 pe-5 mb-0">{title}</h2>
            </div>
            <button
              aria-label="Close"
              className="btn btn-close"
              onClick={onClose}
              type="button"
            />
          </div>
          <div className="modal-body p-4">{children}</div>
        </div>
      </div>
    </div>,
    documentRef.current?.body
  );
};
