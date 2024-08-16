import clsx from 'clsx';
import { ButtonHTMLAttributes, ComponentType, FC } from 'react';
import { BootstrapColourVariants } from '../types';

export type BsButtonBaseProps = {
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  isActive?: boolean;
  outlined?: boolean;
  size?: 'sm' | 'lg';
  type?: 'submit';
  variant: BootstrapColourVariants | 'link';
};

export function withBsButtonClasses<P = object>(
  Component: ComponentType<P>
): FC<P & BsButtonBaseProps> {
  const wrappedWithButtonClasses: FC<P & BsButtonBaseProps> = ({
    className,
    variant,
    size,
    fullWidth,
    outlined,
    isActive,
    disabled,
    ...props
  }) => (
    <Component
      className={clsx(
        'btn',
        size && `btn-${size}`,
        fullWidth && 'w-100',
        outlined ? `btn-outline-${variant}` : `btn-${variant}`,
        { active: isActive, disabled },
        className
      )}
      aria-disabled={disabled}
      {...(props as unknown as P)}
    />
  );
  wrappedWithButtonClasses.displayName = `withBsButtonClasses(${
    Component.displayName || Component.name
  })`;
  return wrappedWithButtonClasses;
}

export type BsButtonProps = BsButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { type?: 'submit' };

export const BsButton: FC<BsButtonProps> = withBsButtonClasses(
  ({ type, ...props }) => (
    <button type={type === 'submit' ? 'submit' : 'button'} {...props} />
  )
);
