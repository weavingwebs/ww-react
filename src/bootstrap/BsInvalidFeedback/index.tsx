import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

type BsInvalidFeedbackProps = PropsWithChildren & {
  className?: string;
  id?: string;
};

export const BsInvalidFeedback: FC<BsInvalidFeedbackProps> = ({
  id,
  children,
  className,
}) => {
  return (
    <div id={id} className={clsx('invalid-feedback d-block', className)}>
      {children}
    </div>
  );
};
