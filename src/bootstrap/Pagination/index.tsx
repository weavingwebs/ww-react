import { FC, ReactNode } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { BsWwPagination } from '../BsWwPagination';

type Props = {
  className?: string;
  currentPage: number;
  itemsPerPage: number;
  nextLabel?: ReactNode;
  onChange: (page: number) => void;
  paginationClasName?: string;
  prevLabel?: ReactNode;
  totalItems: number;
};

/** deprecated: use BsWwPagination instead. */
export const Pagination: FC<Props> = (props) => {
  return (
    <BsWwPagination
      prevLabel={<FaArrowLeft />}
      nextLabel={
        <>
          Next
          <FaArrowRight className="ms-1" />
        </>
      }
      {...props}
    />
  );
};
