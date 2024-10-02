import { makeArrayFromRange } from '../../util';
import { TableResults, TableResultsProps } from '../../components/TableResults';

/** @deprecated: use BsWwTableResultsWithPlaceholderProps instead. */
export type TableResultsWithPlaceholderProps<T> = TableResultsProps<T> & {
  placeholderRowCount: number;
};

/** @deprecated: use BsWwTableResultsWithPlaceholder instead. */
export const TableResultsWithPlaceholder = <T extends {}>({
  placeholderRowCount,
  ...props
}: TableResultsWithPlaceholderProps<T>) => {
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

  return <TableResults {...props} />;
};
