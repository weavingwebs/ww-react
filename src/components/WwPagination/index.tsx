import { FC, ReactNode } from 'react';
import clsx from 'clsx';

export type WwPaginationProps = {
  className?: string;
  currentPage: number;
  itemsPerPage: number;
  nextLabel?: ReactNode;
  onChange: (page: number) => void;
  pageItemClassName?: string;
  pageItemDisabledClassName?: string;
  pageLinkClassName?: string;
  paginationClassName?: string;
  prevLabel?: ReactNode;
  totalItems: number;
};

export const WwPagination: FC<WwPaginationProps> = ({
  onChange,
  totalItems,
  itemsPerPage,
  currentPage,
  className,
  nextLabel,
  prevLabel,
  paginationClassName,
  pageItemDisabledClassName,
  pageLinkClassName,
  pageItemClassName,
}) => {
  let totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages < 1) {
    totalPages = 1;
  }

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <nav className={className}>
      <ul className={paginationClassName}>
        <li
          className={clsx(
            pageItemClassName,
            isFirstPage && pageItemDisabledClassName
          )}
        >
          <button
            type="button"
            className={pageLinkClassName}
            disabled={isFirstPage}
            onClick={() => {
              if (isFirstPage) {
                // eslint-disable-next-line no-alert
                alert('already on first page');
                return;
              }
              onChange(currentPage - 1);
            }}
            title="Previous page"
          >
            {prevLabel || '<'}
          </button>
        </li>
        <li className={clsx(pageItemClassName, pageItemDisabledClassName)}>
          <div className={pageLinkClassName}>
            {`${currentPage} / ${totalPages}`}
          </div>
        </li>
        <li
          className={clsx(
            pageItemClassName,
            isLastPage && pageItemDisabledClassName
          )}
        >
          <button
            className={pageLinkClassName}
            disabled={isLastPage}
            type="button"
            onClick={() => {
              if (isLastPage) {
                // eslint-disable-next-line no-alert
                alert('already on last page');
                return;
              }
              onChange(currentPage + 1);
            }}
            title="Next page"
          >
            {nextLabel || 'Next >'}
          </button>
        </li>
      </ul>
    </nav>
  );
};
