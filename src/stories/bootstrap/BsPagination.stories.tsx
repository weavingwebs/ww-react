import { Meta } from '@storybook/react';
import { FC } from 'react';
import { usePager } from '../../hooks';
import { BsPagination } from '../../bootstrap';

export const Example: FC = () => {
  const { itemsPerPage, currentPage, total, dispatch } = usePager(10, 101);

  return (
    <div>
      <div>Total items: {total}</div>
      <div>Items per page: {itemsPerPage}</div>
      <BsPagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onChange={(p) => dispatch({ type: 'updateCurrentPage', page: p })}
        totalItems={total}
      />
    </div>
  );
};

export default {
  title: 'Bootstrap/BsPagination',
  component: Example,
} as Meta<typeof Example>;
