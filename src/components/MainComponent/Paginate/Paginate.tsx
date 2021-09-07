import { memo } from 'react';
import ReactPaginate from 'react-paginate';

interface PaginateProps {
    pageCount: number;
    changePage: (data: any) => void;
}

export const Paginate = memo(({pageCount, changePage} : PaginateProps) => {
  return (
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={(data: any) => changePage(data.selected)}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
  );
});

