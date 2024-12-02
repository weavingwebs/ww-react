import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { unwrapErrorToString } from '../../util';

export type WwErrorMessageProps = PropsWithChildren & {
  className?: string;
  error: Error | null;
  prefix?: string;
  reloadButton?: boolean;
  reloadButtonClassName?: string;
};

export const WwErrorMessage: FC<WwErrorMessageProps> = ({
  error,
  className,
  prefix,
  reloadButton,
  reloadButtonClassName,
  children,
}) => {
  if (!error) {
    return null;
  }

  let errorMessage = unwrapErrorToString(error);
  if (prefix) {
    errorMessage = `${prefix}: ${errorMessage}`;
  }
  return (
    <div className={clsx(className)}>
      <FaExclamationTriangle style={{ marginRight: '5px' }} />
      {errorMessage}
      {children}
      {reloadButton && (
        <div style={{ marginTop: '5px' }}>
          <button
            type="button"
            className={reloadButtonClassName}
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </div>
      )}
    </div>
  );
};
