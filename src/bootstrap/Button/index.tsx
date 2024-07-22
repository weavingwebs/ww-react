import * as React from 'react';
import clsx from 'clsx';
import { BootstrapColourVariants } from '../colourVariants';

export type BootstrapButtonProps = {
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  isActive?: boolean;
  outlined?: boolean;
  size?: 'sm' | 'lg';
  type?: 'submit';
  variant: BootstrapColourVariants | 'link';
};

export function withButtonClasses<P = object>(
  Component: React.ComponentType<P>
): React.FC<P & BootstrapButtonProps> {
  const wrappedWithButtonClasses: React.FC<P & BootstrapButtonProps> = ({
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
  wrappedWithButtonClasses.displayName = `withButtonClasses(${
    Component.displayName || Component.name
  })`;
  return wrappedWithButtonClasses;
}

export type ButtonProps = BootstrapButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { type?: 'submit' };

export const Button: React.FC<ButtonProps> = withButtonClasses(
  ({ type, ...props }) => (
    <button type={type === 'submit' ? 'submit' : 'button'} {...props} />
  )
);
