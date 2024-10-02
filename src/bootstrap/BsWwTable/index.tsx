import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { WwTable, WwTableProps } from '../../components';

export type BsWwTableProps = PropsWithChildren &
  WwTableProps & {
    notResponsive?: boolean;
    rowHover?: boolean;
    size?: 'sm';
    striped?: boolean;
  };

// Warning: Do not use table striped class. It will not work with <TableRow/> disableHover prop.
export const BsWwTable: FC<BsWwTableProps> = ({
  columns,
  rowHover,
  striped,
  size,
  tableClassName,
  theadClassName,
  tbodyClassName,
  notResponsive,
  children,
}) => {
  return (
    <WwTable
      columns={columns}
      className={clsx({ 'table-responsive': !notResponsive })}
      tableClassName={clsx(
        'table',
        {
          'table-striped': striped,
          'table-hover': rowHover,
        },
        size && `table-${size}`,
        tableClassName
      )}
      tbodyClassName={theadClassName}
      theadClassName={tbodyClassName}
    >
      {children}
    </WwTable>
  );
};
