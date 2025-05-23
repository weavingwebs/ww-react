import * as React from 'react';
import {
  createContext,
  CSSProperties,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useId,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

const miniClsx = (...classNames: Array<string | undefined | false>): string => {
  return classNames.filter((f) => !!f).join(' ');
};

type ModalReducerState = string[];

type ModalReducerActionSet = {
  newState: ModalReducerState;
  type: 'set';
};

type ModalReducerActionAdd = {
  item: string;
  type: 'add';
};

type ModalReducerActionRemove = {
  itemToRemove: string;
  type: 'remove';
};

type ModalActions =
  | ModalReducerActionSet
  | ModalReducerActionAdd
  | ModalReducerActionRemove;

const modalReducer = (
  s: ModalReducerState,
  a: ModalActions
): ModalReducerState => {
  switch (a.type) {
    case 'set': {
      return a.newState;
    }
    case 'add': {
      return [...s, a.item];
    }
    case 'remove': {
      return s.filter((id) => id !== a.itemToRemove);
    }
    default: {
      throw new Error('Unknown action type');
    }
  }
};

type ModalHeaderProps = PropsWithChildren & {
  closeBtnClassName?: string;
  disableCloseButton?: boolean;
  h1ClassName?: string;
  headerClassName?: string;
  hideCloseButton?: boolean;
  onClose: () => void;
  title: string;
  titleClassName?: string;
};

export const ModalHeader: FC<ModalHeaderProps> = ({
  closeBtnClassName,
  titleClassName,
  h1ClassName,
  headerClassName,
  disableCloseButton,
  hideCloseButton,
  title,
  onClose,
  children,
}) => {
  return (
    <div className={miniClsx('ww_modal-header', headerClassName)}>
      {!hideCloseButton && (
        <button
          aria-label="Close"
          aria-disabled={disableCloseButton}
          disabled={disableCloseButton}
          onClick={onClose}
          type="button"
          className={miniClsx('ww_modal-header-close', closeBtnClassName)}
          style={{ cursor: disableCloseButton ? 'not-allowed' : 'pointer' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
        </button>
      )}
      <div className={miniClsx('ww_modal-header-title', titleClassName)}>
        <h1 className={miniClsx('ww_modal-header-title-h1', h1ClassName)}>
          {title}
        </h1>
      </div>
      {children}
    </div>
  );
};

type ModalBodyProps = PropsWithChildren & {
  modalBodyClassName?: string;
};

export const ModalBody: FC<ModalBodyProps> = ({
  modalBodyClassName,
  children,
}) => {
  return (
    <div className={miniClsx('ww_modal-body', modalBodyClassName)}>
      {children}
    </div>
  );
};

export const ModalContext = createContext<{
  openModals: string[];
  pushToOpenModals: (modalId: string) => void;
  removeFromOpenModals: (modalId: string) => void;
}>({
  openModals: [],
  pushToOpenModals: () => {
    throw new Error('modal context not initialised');
  },
  removeFromOpenModals: () => {
    throw new Error('modal context not initialised');
  },
});

export const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [openModals, openModalsDispatch] = useReducer(modalReducer, []);

  const ctxValues = useMemo(() => {
    const pushToOpenModals = (modalId: string) => {
      openModalsDispatch({ type: 'add', item: modalId });
    };
    const removeFromOpenModals = (modalId: string) => {
      openModalsDispatch({ type: 'remove', itemToRemove: modalId });
    };
    return {
      openModals,
      pushToOpenModals,
      removeFromOpenModals,
    };
  }, [openModals]);

  return (
    <ModalContext.Provider value={ctxValues}>{children}</ModalContext.Provider>
  );
};

/** @deprecated: use ModalBaseProps instead. */
export type ModalConfig = {
  blocking?: boolean;
  contentClassName?: string;
  dialogClassName?: string;
  dialogStyles?: CSSProperties;
  isOpen: boolean;
  modalClassName?: string;
  onClose: () => void;
  // Removes all  (except the topmost modal one) - use with classNames: {...} to fully customise your look. Default: false.
  unstyled?: boolean;
};

export type ModalStyleProps = {
  contentClassName?: string;
  dialogClassName?: string;
  dialogStyles?: CSSProperties;
  modalClassName?: string;
  // Removes all  (except the topmost modal one) - use with classNames: {...} to fully customise your look. Default: false.
  unstyled?: boolean;
};

export type ModalBaseProps = ModalStyleProps & {
  blocking?: boolean;
  isOpen: boolean;
  onClose: () => void;
};

export type ModalProps = PropsWithChildren & ModalBaseProps;

// Just a very simple modal implementation.
// No frills, no animation, not very modular.
// Uses modified bootstrap styles.
// Scrolling behind modal disabled.
// Supports modal stacking. Backdrop covers the modal in case of stacking.
export const Modal: FC<ModalProps> = ({ isOpen, ...props }) => {
  if (!isOpen) {
    return null;
  }
  return <ModalInner {...props} />;
};

const ModalInner: FC<Omit<ModalProps, 'isOpen'>> = ({
  onClose,
  contentClassName,
  modalClassName,
  dialogClassName,
  blocking,
  unstyled,
  dialogStyles,
  children,
}) => {
  const documentRef = useRef<Document | null>(null);
  const activeModalId = useRef<string>();

  const id = useId();
  const { openModals, pushToOpenModals, removeFromOpenModals } =
    useContext(ModalContext);

  if (!documentRef.current) {
    documentRef.current = window.document;
  }

  // Keep updating activeModalId.
  useEffect(() => {
    activeModalId.current = openModals.at(-1);
  }, [openModals]);

  useEffect(() => {
    pushToOpenModals(id);

    // we're blocking the scrolling behind a modal.
    documentRef.current?.body.classList.add('ww_modal-overflow_hidden');

    return () => {
      const isAnotherModalMounted = !!documentRef.current
        ?.getElementsByClassName('ww_modal')
        .item(0);

      if (!isAnotherModalMounted) {
        documentRef.current?.body.classList.remove('ww_modal-overflow_hidden');
      }
      removeFromOpenModals(id);
    };
  }, []);

  // Handle ESC key.
  useEffect(() => {
    // Just don't run if a blocking modal.
    if (blocking) {
      return;
    }

    const handleEsc = (ev: KeyboardEvent) => {
      // Note: object reference.
      if (activeModalId.current === id) {
        if (ev.key === 'Escape') {
          onClose();
        }
      }
    };

    documentRef.current?.body.addEventListener('keydown', handleEsc);

    // eslint-disable-next-line consistent-return
    return () => {
      documentRef.current?.body.removeEventListener('keydown', handleEsc);
    };
  }, [blocking]);

  // @todo: a11y
  return createPortal(
    <div
      // NOTE: .ww_modal class is crucial to identify what modals are mounted.
      className={miniClsx('ww_modal', modalClassName)}
      data-blocking={!!blocking}
      data-id={id}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className="ww_modal-close"
        onClick={() => {
          if (!blocking) {
            onClose();
          }
        }}
      />
      <div
        style={dialogStyles}
        className={miniClsx(!unstyled && 'ww_modal-dialog', dialogClassName)}
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className={miniClsx(
            !unstyled && 'ww_modal-content',
            contentClassName
          )}
          // Fix overflow problems with content not filling available space when something's overflowing.
          // Especially when modal is bs fullscreen.
          style={{ overflow: 'auto' }}
          onClick={(ev) => ev.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>,
    documentRef.current?.body
  );
};
