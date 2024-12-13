import { FC } from 'react';
import clsx from 'clsx';
import { WwErrorModal, WwErrorModalBaseProps } from '../../components';
import { BsErrorMessage } from '../BsErrorMessage';

const BsWwErrorModalCloseButtonComponent: FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <button type="button" className="btn btn-outline-danger" onClick={onClick}>
      Close
    </button>
  );
};

const BsWwErrorMessageComponent: FC<{
  error: Error | null;
  prefix?: string;
}> = ({ error, prefix }) => {
  return <BsErrorMessage error={error} prefix={prefix} />;
};

type BsWwErrorModalProps = WwErrorModalBaseProps;

export const BsWwErrorModal: FC<BsWwErrorModalProps> = (props) => {
  return (
    <WwErrorModal
      {...props}
      CloseButtonComponent={BsWwErrorModalCloseButtonComponent}
      ErrorMessageComponent={BsWwErrorMessageComponent}
      actionsContainerClassName={clsx('mt-3 d-flex')}
      modalClassName={clsx('modal')}
      dialogClassName={clsx('modal-dialog modal-dialog-centered')}
      contentClassName={clsx('modal-content')}
      headerClassName={clsx('modal-header')}
      headerTitleClassName={clsx('modal-title')}
      unstyled
    />
  );
};
