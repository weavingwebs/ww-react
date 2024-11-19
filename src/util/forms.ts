import { AnySchema, number, NumberSchema, string } from 'yup';
import Big from 'big.js';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { BigFromString } from './util';

// Transform undefined or '' values to null.
// This is often required for sensible handling of numbers or dates that need an empty initial value.
export function transformEmptyToNull<T extends AnySchema>(
  this: T,
  value: any,
  originalValue: any,
  _schema: T
) {
  if (typeof originalValue === 'undefined' || originalValue === '') {
    return null;
  }
  return value;
}

export const reactDatePickerSharedProps: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> = {
  spellCheck: 'false',
  autoComplete: 'off',
};

export const emailInputProps: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> = {
  type: 'email',
  spellCheck: 'false',
  autoCorrect: 'off',
  autoCapitalize: 'off',
};

// Note: These are chrome tested in UK & US and they match well.
export const inputAutocomplete = {
  title: 'honorific-prefix',
  combinedName: 'name',
  login: 'username',
  email: 'email',
  password: 'current-password',
  newPassword: 'new-password',
  firstName: 'given-name',
  lastName: 'family-name',
  telephone: 'tel',
  address: {
    line1: 'address-line1',
    line2: 'address-line2',
    town: 'address-level2',
    county: 'address-level1',
    country: 'country',
    postcode: 'postal-code',
  },
};

// Note: These are chrome tested in UK & US and they match well.
export const inputAddressAutocomplete = {
  title: 'honorific-prefix',
  combinedName: 'name',
  login: 'username',
  email: 'email',
  password: 'current-password',
  newPassword: 'new-password',
  firstName: 'given-name',
  lastName: 'family-name',
  telephone: 'tel',
  address: {
    line1: 'address-line1',
    line2: 'address-line2',
    town: 'address-level2',
    county: 'address-level1',
    country: 'country',
    postcode: 'postal-code',
  },
};

/** @deprecated: use getBsValidationClassNames */
export const getValidationClassNames = (
  isTouched: boolean | undefined,
  error: string | null | undefined,
  enablePositiveFeedback?: boolean
): 'is-valid' | 'is-invalid' | undefined => {
  if (!isTouched) {
    return;
  }
  if (enablePositiveFeedback) {
    // eslint-disable-next-line consistent-return
    return error ? 'is-invalid' : 'is-valid';
  }
  // eslint-disable-next-line consistent-return
  return error ? 'is-invalid' : undefined;
};

export const getBsValidationClassNames = (
  isTouched: boolean | undefined,
  error: string | null | undefined,
  enablePositiveFeedback?: boolean
): 'is-valid' | 'is-invalid' | undefined => {
  if (!isTouched) {
    return;
  }
  if (enablePositiveFeedback) {
    // eslint-disable-next-line consistent-return
    return error ? 'is-invalid' : 'is-valid';
  }
  // eslint-disable-next-line consistent-return
  return error ? 'is-invalid' : undefined;
};

export const priceAmountValidationSchema = ({
  label,
  min,
  max,
}: {
  label: string;
  max: number | null;
  min: number | null;
}): NumberSchema<number> => {
  let schema = number()
    .label(label)
    .typeError(`${label} must be valid`)
    .test({
      name: 'is-positive',
      message: `${label} must be more than zero`,
      test: (value) => {
        if (!value) {
          return false;
        }
        return Big(value).gt(0);
      },
    })
    .required(`${label} is required`);
  if (min) {
    schema = schema.min(min);
  }
  if (max) {
    schema = schema.max(max);
  }
  return schema;
};

export const stringNumber = (
  label: string,
  opts?: {
    maxDecimalPoints?: number;
    maxValue?: number;
    minValue?: number;
    step?: number;
  }
) => {
  return string()
    .label(label)
    .ensure()
    .test({
      name: 'string-number-tests',
      test(value, ctx) {
        // No value is OK.
        if (value === '' || value === null || typeof value === 'undefined') {
          return true;
        }
        const bigValue = BigFromString(value);

        // Test for min value.
        if (typeof opts?.minValue === 'number' && bigValue.lt(opts.minValue)) {
          return ctx.createError({
            message: `${label} be at least ${opts?.minValue}`,
          });
        }
        // Test for max value.
        if (typeof opts?.maxValue === 'number' && bigValue.gt(opts.maxValue)) {
          return ctx.createError({
            message: `${label} must be at most ${opts?.maxValue}`,
          });
        }
        // Test for max decimal points
        if (typeof opts?.maxDecimalPoints === 'number') {
          if (
            (value.split('.', 2).at(1)?.length ?? 0) > opts.maxDecimalPoints
          ) {
            return ctx.createError({
              message: `${label} must have a maximum of ${opts.maxDecimalPoints} decimal points`,
            });
          }
        }
        // Test for step (if value is a multiple of step - if set).
        if (typeof opts?.step === 'number') {
          const floatValue = parseFloat(value);
          if (floatValue % opts.step !== 0) {
            return ctx.createError({
              message: `${label} must be a multiple of ${opts.step}`,
            });
          }
        }
        return true;
      },
    });
};

export type StringBool = 'true' | 'false';

export const stringBool = (label: string) => {
  return string()
    .label(label)
    .required()
    .oneOf(['true', 'false'], (params) => {
      // HACK: oneOf beats required for '' so we need to check for it.
      return !params.value
        ? `${label} is required`
        : `${label} must be true or false`;
    });
};

export type StringBoolNullable = StringBool | '';

export const stringBoolNullable = (label: string) => {
  return string().label(label).ensure().oneOf(['true', 'false', '']);
};

export const isStringBool = (str: unknown) => str === 'true' || str === 'false';

export const stringBoolFromBoolean = (bool: boolean): StringBool =>
  bool ? 'true' : 'false';

export const booleanFromStringBool = (str: StringBool): boolean =>
  str === 'true';

export const booleanFromStringBoolNullable = (str: StringBoolNullable) =>
  str === '' ? null : str === 'true';

export const stringBoolNullableFromBoolean = (
  bool: boolean | null
): StringBoolNullable => (bool === null ? '' : stringBoolFromBoolean(bool));
