import clsx from 'clsx';
import { CSSProperties, FC } from 'react';
import { BootstrapColourVariants } from '../types';

type LoadingType = 'border' | 'grow';

type BsLoadingBaseProps = {
  className?: string;
  colour?: BootstrapColourVariants;
  // Note: Bootstrap 5.x.x doesn't support lg. We can make a custom class but so far hasn't had a use case for it.
  size?: 'sm';
  style?: CSSProperties;
  type?: LoadingType;
};

const BsLoadingBase: FC<BsLoadingBaseProps> = ({
  type,
  colour,
  size,
  className,
  style,
}) => {
  let loadingType: LoadingType = 'border';
  if (type) {
    loadingType = type;
  }
  return (
    <div
      role="status"
      className={clsx(
        `spinner-${loadingType}`,
        size && `spinner-${loadingType}-${size}`,
        colour ? `text-${colour}` : 'text-primary',
        className
      )}
      style={style}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

type LoadingProps = BsLoadingBaseProps & {
  centered?: boolean;
};

// Note: If colour not specified, primary is used.
// Defaults to Spinner Border if type not provided.
export const BsLoading: FC<LoadingProps> = ({
  centered,
  ...loadingBaseProps
}) => {
  if (centered) {
    return (
      <div className="text-center">
        <BsLoadingBase {...loadingBaseProps} />
      </div>
    );
  }
  return <BsLoadingBase {...loadingBaseProps} />;
};

type BsFullPageLoadingProps = {
  className?: string;
};

export const BsFullPageLoading: FC<BsFullPageLoadingProps> = ({
  className,
}) => (
  <div className={clsx('container', className)}>
    <BsLoading centered type="grow" />
  </div>
);
