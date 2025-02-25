import clsx from 'clsx';
import { CSSProperties, FC } from 'react';
import { BootstrapColourVariants } from '../colourVariants';

type LoadingType = 'border' | 'grow';

type LoadingBaseProps = {
  className?: string;
  colour?: BootstrapColourVariants;
  // Note: Bootstrap 5.x.x doesn't support lg. We can make a custom class but so far hasn't had a use case for it.
  size?: 'sm';
  style?: CSSProperties;
  type?: LoadingType;
};

const LoadingBase: FC<LoadingBaseProps> = ({
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

type LoadingProps = LoadingBaseProps & {
  centered?: boolean;
};

// Note: If colour not specified, primary is used.
// Defaults to Spinner Border if type not provided.
/** @deprecated: use BsLoading instead. */
export const Loading: FC<LoadingProps> = ({
  centered,
  ...loadingBaseProps
}) => {
  if (centered) {
    return (
      <div className="text-center">
        <LoadingBase {...loadingBaseProps} />
      </div>
    );
  }
  return <LoadingBase {...loadingBaseProps} />;
};

type FullPageLoadingProps = {
  className?: string;
};

/** @deprecated: use BsFullPageLoading instead. */
export const FullPageLoading: FC<FullPageLoadingProps> = ({ className }) => (
  <div className={clsx('container', className)}>
    <Loading centered type="grow" />
  </div>
);
