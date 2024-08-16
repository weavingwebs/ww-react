import { TableResults, TableResultsBaseProps } from '../../components';
import { BsErrorMessage } from '../BsErrorMessage';
import { BsFullPageLoading } from '../BsLoading';

export type BsTableResultsProps<T> = TableResultsBaseProps<T>;

export function BsTableResults<T extends {}>(props: BsTableResultsProps<T>) {
  return (
    <TableResults
      {...props}
      ErrorComponent={BsErrorMessage}
      FullPageLoadingComponent={BsFullPageLoading}
    />
  );
}
