import { FC } from 'react';
import clsx from 'clsx';
import { WwPagination, WwPaginationProps } from '../../components/WwPagination';

export type BsWwPaginationProps = Omit<
  WwPaginationProps,
  'pageItemDisabledClassName' | 'pageItemClassName' | 'pageLinkClassName'
>;

/** Important: this no longer includes arrow icons (just '<' and '>)'. These can be passed through via prevLabel & nextLabel. */
export const BsWwPagination: FC<BsWwPaginationProps> = ({
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
    <WwPagination
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
