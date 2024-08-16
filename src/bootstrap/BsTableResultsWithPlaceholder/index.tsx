import { makeArrayFromRange } from '../../util';
import { BsTableResults, BsTableResultsProps } from '../BsTableResults';

export type BsTableResultsWithPlaceholderProps<T> = BsTableResultsProps<T> & {
  placeholderRowCount: number;
};

export const BsTableResultsWithPlaceholder = <T extends {}>({
  placeholderRowCount,
  ...props
}: BsTableResultsWithPlaceholderProps<T>) => {
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

  return <BsTableResults {...props} />;
};
