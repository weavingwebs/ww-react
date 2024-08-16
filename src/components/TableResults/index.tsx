import { ComponentType, ReactNode } from 'react';

export type TableResultsBaseProps<T> = {
  columnCount: number;
  error: Error | null;
  errorPrefix?: string /** @deprecated: wrap errors with cause */;
  isLoading: boolean;
  renderRow: (row: T) => ReactNode;
  results: T[] | null | undefined;
};

export type TableResultsProps<T> = TableResultsBaseProps<T> & {
  ErrorComponent: ComponentType<{ error: Error | null; prefix?: string }>;
  FullPageLoadingComponent: ComponentType;
};

export function TableResults<T extends {}>({
  isLoading,
  error,
  errorPrefix,
  results,
  columnCount,
  renderRow,
  ErrorComponent,
  FullPageLoadingComponent,
}: TableResultsProps<T>) {
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
        <td colSpan={columnCount}>No results found.</td>
      </tr>
    );
  }

  return <>{results.map(renderRow)}</>;
}
