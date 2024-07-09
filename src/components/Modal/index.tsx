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
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

type ModalHeaderOptions = {
  options?: {
    classNames?: {
      closeBtn?: string;
      h1?: string;
      header?: string;
      title?: string;
    };
    disableCloseButton?: boolean;
    hideCloseButton?: boolean;
  };
};

type ModalHeaderProps = ModalHeaderOptions &
  PropsWithChildren & {
    onClose: () => void;
    title: string;
  };

export const ModalHeader: FC<ModalHeaderProps> = ({
  options,
  title,
  onClose,
  children,
}) => {
  return (
    <div className={miniClsx('ww_modal-header', options?.classNames?.header)}>
      {!options?.hideCloseButton && (
        <button
          aria-label="Close"
          aria-disabled={options?.disableCloseButton}
          disabled={options?.disableCloseButton}
          onClick={onClose}
          type="button"
          className={miniClsx(
            'ww_modal-header-close_btn',
            options?.classNames?.closeBtn
          )}
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
      <div
        className={miniClsx(
          'ww_modal-header-title',
          options?.classNames?.title
        )}
      >
        <h1
          className={miniClsx(
            'ww_modal-header-title-h1',
            options?.classNames?.h1
          )}
        >
          {title}
        </h1>
      </div>
      {children}
    </div>
  );
};

type ModalBodyOptions = {
  options?: {
    classNames?: {
      body?: string;
    };
  };
};

type ModalBodyProps = ModalBodyOptions & PropsWithChildren;

export const ModalBody: FC<ModalBodyProps> = ({ options, children }) => {
  return (
    <div className={miniClsx('ww_modal-body', options?.classNames?.body)}>
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
  // @todo: reducer.
  const [openModals, setOpenModals] = useState<string[]>([]);

  const ctxValues = useMemo(() => {
    const pushToOpenModals = (modalId: string) => {
      const current = [...openModals];
      current.push(modalId);
      setOpenModals(current);
    };
    const removeFromOpenModals = (modalId: string) => {
      const current = openModals.filter((id) => id !== modalId);
      setOpenModals(current);
    };
    return {
      openModals,
      pushToOpenModals,
      removeFromOpenModals,
    };
  }, [openModals, setOpenModals]);

  return (
    <ModalContext.Provider value={ctxValues}>{children}</ModalContext.Provider>
  );
};

const miniClsx = (...classNames: Array<string | undefined | false>): string => {
  return classNames.filter((f) => !!f).join(' ');
};

type ModalConfig = {
  isOpen: boolean;
  onClose: () => void;
  options?: {
    // Disable all the ways to close except for "X" button. Default: false.
    blocking?: boolean;
    classNames?: {
      content?: string;
      dialog?: string;
      modal?: string;
    };
    inlineStyles?: {
      dialogStyles?: CSSProperties;
    };
    // Removes all  (except the topmost modal one) - use with classNames: {...} to fully customise your look. Default: false.
    unstyled?: boolean;
  };
};

type ModalProps = PropsWithChildren & ModalConfig;

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
  options,
  onClose,
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

  // @todo: Is this optimised?
  useEffect(() => {
    pushToOpenModals(id);

    // we're blocking the scrolling behind a modal.
    documentRef.current?.body.classList.add('ww_modal-overflow_hidden');

    return () => {
      // @todo: this is now outdated logic, find a better way to identify OUR modals.
      const isAnotherModalMounted = !!documentRef.current
        ?.getElementsByClassName('ww_modal')
        .item(0);

      if (!isAnotherModalMounted) {
        documentRef.current?.body.classList.remove('ww_modal-overflow_hidden');
      }

      removeFromOpenModals(id);
    };
  }, []);

  // handle esc key
  // @todo: currently it closes all modals except the blocking one (wrong!)
  // @todo: should only attempt to close current modal and leave the others.
  useEffect(() => {
    // Just don't run if a blocking modal.
    if (options?.blocking) {
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
  }, [options?.blocking]);

  // @todo: Make custom styles and allow their overriding.
  // @todo: document style customisation.
  // @todo: a11y
  return createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={miniClsx('ww_modal', options?.classNames?.modal)}
      data-blocking={!!options?.blocking}
      data-id={id}
      onClick={() => {
        if (!options?.blocking) {
          onClose();
        }
      }}
    >
      <div
        style={options?.inlineStyles?.dialogStyles}
        className={miniClsx(
          !options?.unstyled && 'ww_modal-dialog',
          options?.classNames?.dialog
        )}
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className={miniClsx(
            !options?.unstyled && 'ww_modal-content',
            options?.classNames?.content
          )}
          onClick={(ev) => ev.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>,
    documentRef.current?.body
  );
};
