import { FC, PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';

export type WwTableProps = PropsWithChildren & {
  className?: string;
  // Tip: Use <><HeaderCell>Column Name</HeaderCell>...</>
  columns: ReactNode;
  tableClassName?: string;
  tbodyClassName?: string;
  theadClassName?: string;
};

export const WwTable: FC<WwTableProps> = ({
  columns,
  tableClassName,
  theadClassName,
  tbodyClassName,
  className,
  children,
}) => (
  <div className={className}>
    <table className={tableClassName}>
      {columns && (
        <thead className={clsx(theadClassName)}>
          <tr>{columns}</tr>
        </thead>
      )}
      <tbody className={clsx(tbodyClassName)}>{children}</tbody>
    </table>
  </div>
);
