import React, { useMemo } from 'react';
import { PaginationProps } from './types';
import { PaginationContainer } from './styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * componente de paginação para listagens 
 */
function Pagination(props: PaginationProps) {
  const { amountOfPages, page, onPageChange } = props;

  function beforePage() {
    if (page <= 1 || props.loading) return;
    onPageChange(page - 1);
  }

  function nextPage() {
    if (page >= amountOfPages || props.loading) return;
    onPageChange(page + 1);
  }

  return (
    <PaginationContainer className="pagination-container">
      <div
        className={`page-number-container ${page <= 1 && 'disabled'} `}
        id="before-page-button"
        onClick={beforePage}
      >
        <FaChevronLeft />
      </div>
      <div id="actual-page" className="page-number-container next-page-button">{page}</div>
      <div className="page-number-max">
        <span className="bar">/</span>
        <span className="amount-of-pages">{amountOfPages}</span>
      </div>
      <div
        className={`page-number-container ${
          page >= amountOfPages ? 'disabled' : ''
        } `}
        id="next-page-button"
        onClick={nextPage}
      >
        <FaChevronRight />
      </div>
    </PaginationContainer>
  );
}

export default Pagination;
