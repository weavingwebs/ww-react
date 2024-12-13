import { Meta } from '@storybook/react';
import { FC } from 'react';
import { useWwTurnstile } from '../../components/WwTurnstile';
import { ModalContextProvider } from '../../components';
import { BsWwTurnstile } from '../../bootstrap/BsWwTurnstile';

export const BsWwTurnstileStory: FC = () => {
  const turnstile = useWwTurnstile('');
  return (
    <ModalContextProvider>
      <h1>BsWwTurnstile</h1>
      <BsWwTurnstile turnstileSiteKey="notreal" {...turnstile}>
        <button
          className="btn btn-primary"
          type="button"
          disabled={
            turnstile.isWaitingForInteraction || turnstile.isVerifyingTurnstile
          }
        >
          Submit
        </button>
      </BsWwTurnstile>
    </ModalContextProvider>
  );
};

export default {
  title: 'Bootstrap/BsWwTurnstile',
  component: BsWwTurnstileStory,
} as Meta<typeof BsWwTurnstileStory>;
