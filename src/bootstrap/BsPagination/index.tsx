import { FC } from 'react';
import clsx from 'clsx';
import { Pagination, PaginationProps } from '../../components';

type BsPaginationProps = Omit<
  PaginationProps,
  'pageItemDisabledClassName' | 'pageItemClassName' | 'pageLinkClassName'
>;

export const BsPagination: FC<BsPaginationProps> = ({
  onChange,
  nextLabel,
  prevLabel,
  itemsPerPage,
  currentPage,
  totalItems,
  className,
  paginationClassName,
}) => {
  return (
    <Pagination
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      onChange={onChange}
      prevLabel={prevLabel}
      nextLabel={nextLabel}
      className={className}
      paginationClassName={clsx(
        'pagination pagination-sm',
        paginationClassName
      )}
      pageItemClassName="page-item"
      pageLinkClassName="page-link"
      pageItemDisabledClassName="disabled"
    />
  );
};
