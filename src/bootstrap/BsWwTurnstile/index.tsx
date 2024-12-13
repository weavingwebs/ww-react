import { FC, PropsWithChildren } from 'react';
import { WwTurnstile, WwTurnstileProps } from '../../components/WwTurnstile';
import { BsWwErrorModal } from '../BsWwErrorModal';

const TryAgainButtonComponent: FC<
  PropsWithChildren<{ onClick: () => void }>
> = ({ onClick, children }) => (
  <button type="button" className="btn btn-primary ms-auto" onClick={onClick}>
    {children}
  </button>
);

type BsWwTurnstileProps = WwTurnstileProps;

export const BsWwTurnstile: FC<BsWwTurnstileProps> = (props) => {
  return (
    <WwTurnstile
      {...props}
      ErrorModalComponent={BsWwErrorModal}
      TryAgainButtonComponent={TryAgainButtonComponent}
    />
  );
};
