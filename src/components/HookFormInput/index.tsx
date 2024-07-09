import {
  Control,
  FieldValues,
  Path,
  useController,
  useFormContext,
} from 'react-hook-form';
import {
  CSSProperties,
  HTMLInputTypeAttribute,
  JSX,
  ReactElement,
  ReactNode,
} from 'react';
import clsx from 'clsx';
import { FormLabel } from '../../bootstrap';
import { FormError } from '../../bootstrap/FormError';
import { FormText } from '../../bootstrap/FormText';

type FormInputPropsSelect = {
  as: 'select';
  autoComplete?: string;
  children: ReactNode;
};

type FormInputPropsTextarea = {
  as: 'textarea';
  autoCapitalize?: string;
  autoComplete?: string;
  autoCorrect?: 'on' | 'off';
  placeholder?: string;
  readOnly?: boolean;
  rows?: number;
  spellCheck?: 'true' | 'false';
};

type FormInputPropsInput = {
  as?: undefined | 'input';
  autoCapitalize?: string;
  autoComplete?: string;
  autoCorrect?: 'on' | 'off';
  placeholder?: string;
  readOnly?: boolean;
  spellCheck?: 'true' | 'false';
  // NOTE: checkboxes/radios should not use this component.
  type: Exclude<HTMLInputTypeAttribute, 'checkbox' | 'radio'>;
};

type FormInputProps<T extends FieldValues> = (
  | FormInputPropsSelect
  | FormInputPropsTextarea
  | FormInputPropsInput
) & {
  autoFocus?: boolean;
  className?: string;
  control?: Control<T>;
  disabled?: boolean;
  helpText?: string;
  inputClassName?: string;
  inputPrependText?: string;
  label?: ReactNode;
  labelClassName?: string;
  max?: string | number;
  min?: string | number;
  name: Path<T>;
  required?: boolean;
  style?: CSSProperties;
};

/** @deprecated Use BsFormInput. */
export function HookFormInput<T extends FieldValues>({
  name,
  control: _control,
  required,
  label,
  className,
  inputClassName,
  labelClassName,
  helpText,
  style,
  inputPrependText,
  ...asProps
}: FormInputProps<T>): ReactElement | null {
  const formContext = useFormContext<T>();
  let control = _control;
  if (!_control) {
    if (!formContext) {
      throw new Error(
        'You must either set the control prop or wrap this component with a FormProvider'
      );
    }
    control = formContext.control;
  }

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required,
    },
  });

  let Component: keyof JSX.IntrinsicElements;
  switch (asProps.as) {
    case 'select': {
      Component = 'select';
      break;
    }
    case 'textarea': {
      Component = 'textarea';
      break;
    }
    default: {
      Component = 'input';
    }
  }
  const { as, ...inputProps } = asProps;

  return (
    <div className={clsx(className, 'has-validation')} aria-live="polite">
      {label && (
        <FormLabel
          htmlFor={name}
          required={required}
          className={clsx(labelClassName)}
        >
          {label}
        </FormLabel>
      )}
      <div className={clsx({ 'input-group': inputPrependText })}>
        {inputPrependText && (
          <span className="input-group-text">{inputPrependText}</span>
        )}
        <Component
          {...inputProps}
          {...field}
          value={
            typeof field.value === 'undefined' || field.value === null
              ? ''
              : field.value
          }
          onBlur={(ev) => {
            const { value } = ev.target;
            field.onChange(value.trim());
            field.onBlur();
          }}
          id={name}
          className={clsx(inputClassName, { 'is-invalid': error })}
          aria-invalid={error ? 'true' : 'false'}
          aria-errormessage={error ? `${name}Error` : undefined}
          style={style}
          required={required}
        />
      </div>
      {helpText && <FormText ariaDescribedBy={name}>{helpText}</FormText>}
      {error && <FormError id={`${name}Error`}>{error.message}</FormError>}
    </div>
  );
}
