import { FC } from 'react';
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

const BsWwErrorMessageComponent: FC<{ error: Error | null }> = ({ error }) => {
  return <BsErrorMessage error={error} />;
};

type BsWwErrorModalProps = WwErrorModalBaseProps;

export const BsWwErrorModal: FC<BsWwErrorModalProps> = (props) => {
  return (
    <WwErrorModal
      {...props}
      CloseButtonComponent={BsWwErrorModalCloseButtonComponent}
      ErrorMessageComponent={BsWwErrorMessageComponent}
      actionsContainerClassName="mt-3"
    />
  );
};
