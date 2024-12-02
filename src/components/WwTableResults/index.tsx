import { ComponentType, ReactNode } from 'react';

export type WwTableResultsBaseProps<T> = {
  columnCount: number;
  error: Error | null;
  errorPrefix?: string /** @deprecated: wrap errors with cause */;
  isLoading: boolean;
  noResultsMessage?: string;
  renderRow: (row: T) => ReactNode;
  results: T[] | null | undefined;
};

export type WwTableResultsProps<T> = WwTableResultsBaseProps<T> & {
  ErrorComponent: ComponentType<{ error: Error | null; prefix?: string }>;
  FullPageLoadingComponent: ComponentType;
};

export function WwTableResults<T extends {}>({
  isLoading,
  error,
  errorPrefix,
  results,
  columnCount,
  renderRow,
  noResultsMessage,
  ErrorComponent,
  FullPageLoadingComponent,
}: WwTableResultsProps<T>) {
  if (error) {
    return (
      <tr>
        <td colSpan={columnCount}>
          <ErrorComponent error={error} prefix={errorPrefix} />
        </td>
      </tr>
    );
  }

  if (isLoading) {
    return (
      <tr>
        <td colSpan={columnCount}>
          <FullPageLoadingComponent />
        </td>
      </tr>
    );
  }

  if (!results?.length) {
    return (
      <tr>
        <td colSpan={columnCount}>{noResultsMessage || 'No results found.'}</td>
      </tr>
    );
  }

  return <>{results.map(renderRow)}</>;
}
