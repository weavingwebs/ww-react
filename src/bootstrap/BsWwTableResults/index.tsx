import { WwTableResults, WwTableResultsBaseProps } from '../../components';
import { BsErrorMessage } from '../BsErrorMessage';
import { BsFullPageLoading } from '../BsLoading';

export type BsWwTableResultsProps<T> = WwTableResultsBaseProps<T>;

export function BsWwTableResults<T extends {}>(
  props: BsWwTableResultsProps<T>
) {
  return (
    <WwTableResults
      {...props}
      ErrorComponent={BsErrorMessage}
      FullPageLoadingComponent={BsFullPageLoading}
    />
  );
}
