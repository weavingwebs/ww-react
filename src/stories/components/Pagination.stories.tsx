import { Meta } from '@storybook/react';
import { FC } from 'react';
import { usePager } from '../../hooks';
import { Pagination } from '../../components';

export const PaginationExample: FC = () => {
  const { itemsPerPage, currentPage, total, dispatch } = usePager(10, 101);

  return (
    <div>
      <div>Total items: {total}</div>
      <div>Items per page: {itemsPerPage}</div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onChange={(p) => dispatch({ type: 'updateCurrentPage', page: p })}
        totalItems={total}
      />
    </div>
  );
};

export default {
  title: 'Components/Pagination',
  component: PaginationExample,
} as Meta<typeof PaginationExample>;
