import { makeArrayFromRange } from '../../util';
import { BsWwTableResults, BsWwTableResultsProps } from '../BsWwTableResults';

export type BsWwTableResultsWithPlaceholderProps<T> =
  BsWwTableResultsProps<T> & {
    placeholderRowCount: number;
  };

export const BsWwTableResultsWithPlaceholder = <T extends {}>({
  placeholderRowCount,
  ...props
}: BsWwTableResultsWithPlaceholderProps<T>) => {
  if (props.isLoading) {
    return (
      <>
        {makeArrayFromRange(1, placeholderRowCount).map((i) => (
          <tr key={i}>
            {makeArrayFromRange(1, props.columnCount).map((j) => (
              <td key={j} className="placeholder-glow">
                <div className="placeholder w-100" />
              </td>
            ))}
          </tr>
        ))}
      </>
    );
  }

  return <BsWwTableResults {...props} />;
};
