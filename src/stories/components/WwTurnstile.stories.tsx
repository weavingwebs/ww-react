import { Meta } from '@storybook/react';
import { FC, PropsWithChildren } from 'react';
import { useWwTurnstile, WwTurnstile } from '../../components/WwTurnstile';
import {
  ModalContextProvider,
  WwErrorModal,
  WwErrorModalBaseProps,
  WwModalCloseButtonComponentProps,
  WwModalErrorMessageComponentProps,
} from '../../components';

const ModalCloseButtonComponent: FC<WwModalCloseButtonComponentProps> = ({
  onClick,
  label,
}) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};

const TryAgainButtonComponent: FC<
  PropsWithChildren<{ onClick: () => void }>
> = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} style={{ marginLeft: '1rem' }}>
      {children}
    </button>
  );
};

const ErrorMessageComponent: FC<WwModalErrorMessageComponentProps> = ({
  error,
  prefix,
}) => {
  if (!error) {
    return null;
  }
  return (
    <div
      style={{
        background: 'red',
        color: 'white',
        padding: '10px',
        marginBottom: '1rem',
      }}
    >
      {[prefix, error.message].filter((v) => !!v).join(': ')}
    </div>
  );
};

const ErrorModal: FC<WwErrorModalBaseProps> = (props) => (
  <WwErrorModal
    {...props}
    CloseButtonComponent={ModalCloseButtonComponent}
    ErrorMessageComponent={ErrorMessageComponent}
  />
);

export const WwTurnstileStory: FC = () => {
  const turnstile = useWwTurnstile('');
  return (
    <ModalContextProvider>
      <h1>WwTurnstile</h1>
      <WwTurnstile
        {...turnstile}
        ErrorModalComponent={ErrorModal}
        TryAgainButtonComponent={TryAgainButtonComponent}
        turnstileSiteKey="notreal"
      >
        <button
          type="button"
          disabled={
            turnstile.isWaitingForInteraction || turnstile.isVerifyingTurnstile
          }
        >
          Submit
        </button>
      </WwTurnstile>
    </ModalContextProvider>
  );
};

export default {
  title: 'Components/WwTurnstile',
  component: WwTurnstileStory,
} as Meta<typeof WwTurnstileStory>;
