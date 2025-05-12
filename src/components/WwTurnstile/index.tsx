import { ComponentType, FC, PropsWithChildren, useRef, useState } from 'react';
import clsx from 'clsx';
import * as React from 'react';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';
import { BsLoading } from '../../bootstrap';
import './turnstile.css';
import { WwErrorModalBaseProps } from '../WwErrorModal';

export const useWwTurnstile = (action: string) => {
  const turnstileRef = useRef<TurnstileInstance>();
  const [isVerifyingTurnstile, setIsVerifyingTurnstile] = useState(true);
  const [isWaitingForInteraction, setIsWaitingForInteraction] = useState(false);

  return {
    turnstileRef,
    isVerifyingTurnstile,
    setIsVerifyingTurnstile,
    isWaitingForInteraction,
    setIsWaitingForInteraction,
    action,
  };
};

export type WwTurnstileProps = PropsWithChildren &
  ReturnType<typeof useWwTurnstile> & {
    className?: string;
    loadingOnLeft?: boolean;
    onSuccess?: (token: string) => void;
    turnstileSiteKey: string;
  };

type Props = WwTurnstileProps & {
  ErrorModalComponent: ComponentType<WwErrorModalBaseProps>;
  TryAgainButtonComponent: ComponentType<
    PropsWithChildren<{ onClick: () => void }>
  >;
};

/** With Bootstrap, use BsWwTurnstile */
export const WwTurnstile: FC<Props> = ({
  turnstileSiteKey,
  className,
  children,
  action,
  isVerifyingTurnstile,
  setIsVerifyingTurnstile,
  setIsWaitingForInteraction,
  turnstileRef,
  onSuccess,
  loadingOnLeft,
  ErrorModalComponent,
  TryAgainButtonComponent,
}) => {
  const [turnstileError, setTurnstileError] = useState<Error | null>(null);

  return (
    <div
      className={clsx('ww_turnstile', className, {
        loading_on_left: loadingOnLeft,
      })}
    >
      <Turnstile
        className="ww_turnstile-turnstile"
        ref={turnstileRef}
        siteKey={turnstileSiteKey}
        options={{
          action,
          execution: 'render',
          theme: 'auto',
          language: 'en',
          refreshExpired: 'auto',
          retry: 'auto',
          appearance: 'interaction-only',
        }}
        onLoadScript={() => {
          setIsVerifyingTurnstile(true);
        }}
        onBeforeInteractive={() => {
          setIsVerifyingTurnstile(false);
          setIsWaitingForInteraction(true);
        }}
        onExpire={() => {
          setIsVerifyingTurnstile(true);
          setIsWaitingForInteraction(false);
        }}
        onError={(err) => {
          setTurnstileError({ name: 'TurnstileError', message: err });
          setIsVerifyingTurnstile(false);
          setIsWaitingForInteraction(false);
        }}
        onSuccess={(token) => {
          if (onSuccess) {
            onSuccess(token);
          }
          setIsWaitingForInteraction(false);
          setIsVerifyingTurnstile(false);
        }}
      />

      <div className="ww_turnstile-action_container">
        {/* NOTE: The submit button needs to go here. */}
        {children}
        <div
          className={clsx('ww_turnstile-loading', {
            hidden: !isVerifyingTurnstile,
          })}
        >
          {isVerifyingTurnstile && (
            <>
              <BsLoading size="sm" />{' '}
              <p className="ww_turnstile-loading-msg">{`We're just checking you're not a robot...`}</p>
            </>
          )}
        </div>
      </div>
      {turnstileError && (
        <ErrorModalComponent
          title="Anti-bot verification error"
          prefix="Turnstile error"
          error={turnstileError}
          onClose={() => {
            setTurnstileError(null);
          }}
          closeActionLabel="Cancel"
          additionalAction={
            <TryAgainButtonComponent
              onClick={() => {
                setTurnstileError(null);
                turnstileRef.current?.reset();
              }}
            >
              Close and try again
            </TryAgainButtonComponent>
          }
        >
          <p>
            There was a problem with the anti-bot verification service. Please
            try again later.
          </p>
        </ErrorModalComponent>
      )}
    </div>
  );
};
