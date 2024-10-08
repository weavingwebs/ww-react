import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { unwrapErrorToString } from '../../util';

export type BsErrorMessageProps = PropsWithChildren & {
  className?: string;
  error: Error | null;
  prefix?: string;
  reloadButton?: boolean;
};

export const BsErrorMessage: FC<BsErrorMessageProps> = ({
  error,
  className,
  prefix,
  reloadButton,
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
    <div className={clsx('alert alert-danger', className)}>
      <FaExclamationTriangle className="me-2" />
      {errorMessage}
      {children}
      {reloadButton && (
        <div className="mt-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </div>
      )}
    </div>
  );
};
