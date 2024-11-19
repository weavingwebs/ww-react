import Big, { BigSource } from 'big.js';

export const makeArrayFromRange = (start: number, end: number) => {
  if (start > end) {
    throw new Error('start must be < end');
  }
  const res = [];
  for (let i = start; i <= end; i++) {
    res.push(i);
  }
  return res;
};

export const formatPlural = (
  value: number,
  singular: string,
  plural: string
) => (value === 1 ? singular : plural);

export const toUpper = (str: string) => str.toLocaleUpperCase();
export const toLower = (str: string) => str.toLocaleLowerCase();

export function ucFirst(str: string, resetToLcFirst?: boolean) {
  const strProcessed = resetToLcFirst ? toLower(str) : str;
  return toUpper(strProcessed.charAt(0)) + strProcessed.slice(1);
}

export const isAbsoluteUrl = (url: string) => /^(https?:)?\/\//m.test(url);

export const formatPrettyUrl = (url: string) =>
  url.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '');

export function BigFromString(value: BigSource | undefined): Big {
  if (typeof value === 'undefined' || value === null || value === '') {
    return Big(0);
  }
  if (typeof value === 'string') {
    // eslint-disable-next-line no-restricted-syntax
    return Big(value.replace(/[^\d.-]/g, ''));
  }
  // eslint-disable-next-line no-restricted-syntax
  return Big(value);
}

export function currencySymbol(currencyCode: string): string {
  switch (currencyCode) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'GBP':
      return '£';
    default:
      throw new Error(`Unknown currency code: ${currencyCode}`);
  }
}

export function formatBigNumber(
  input: Big,
  dp: number,
  fixed?: boolean
): string {
  let price = input.toFixed(dp);
  if (fixed) {
    return price;
  }

  // Remove decimal point if it's an integer.
  price = price.replace(/\.0+$/, '');

  // Remove trailing zeros up to 2 decimal places.
  if (dp > 2) {
    const priceParts = /^(\d+\.\d\d)(\d+)$/.exec(price);
    if (priceParts) {
      price = priceParts[1] + priceParts[2].replace(/0+$/, '');
    }
  }

  return price;
}

export function formatBigPrice(
  amount: Big,
  currencyCode?: string,
  fixed?: boolean
): string {
  const formattedAmount = formatBigNumber(amount, 2, fixed);

  if (!currencyCode) {
    return formattedAmount;
  }
  return `${currencySymbol(currencyCode)}${formattedAmount}`;
}

export function formatPrice(
  input: { amount: string; currencyCode: string },
  fixed?: boolean
): string {
  return formatBigPrice(BigFromString(input.amount), input.currencyCode, fixed);
}

/** @deprecated: use StringBool */
export type Booleanish = 'true' | 'false';

/** @deprecated: use isStringBool */
export const isBooleanish = (str: unknown) => str === 'true' || str === 'false';

/** @deprecated: use stringBoolFromBoolean */
export const booleanToBooleanish = (bool: boolean): Booleanish =>
  String(bool) as Booleanish;

/** @deprecated: use booleanFromStringBool */
export const booleanishToBoolean = (booleanish: Booleanish): boolean =>
  booleanish === 'true';

export function unwrapErrorToString(err: Error) {
  let errStr = err.message;
  if (err.cause instanceof Error) {
    errStr += `: ${unwrapErrorToString(err.cause)}`;
  }
  return errStr;
}
