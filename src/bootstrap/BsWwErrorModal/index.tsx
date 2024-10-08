import { FC } from 'react';
import { WwErrorModal, WwErrorModalBaseProps } from '../../components';

const BsWwErrorModalCloseButtonComponent: FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <button type="button" className="btn btn-outline-danger" onClick={onClick}>
      Close
    </button>
  );
};

type BsWwErrorModalProps = WwErrorModalBaseProps;

export const BsWwErrorModal: FC<BsWwErrorModalProps> = (props) => {
  return (
    <WwErrorModal
      {...props}
      CloseButtonComponent={BsWwErrorModalCloseButtonComponent}
    />
  );
};
