import './Pagination.scss';
import React from 'react';
import iconRight from './assets/iconRight.svg';

interface PaginationProps {
  totalProducts: number;
  productsPerPage: number;
  setCurrentPage: (n: number) => void;
  currentPage: number;
}

const Pagination = ({ totalProducts, productsPerPage, setCurrentPage, currentPage }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div id="pagination">
        {pageNumbers.map((page, index) => (
          <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'btn white active' : 'btn white'}>
            {page}
          </button>
        ))}
        <button
          onClick={() => {
            if (currentPage < pageNumbers.length) {
              setCurrentPage(currentPage + 1);
            }
          }}
          className="btn white next"
        >
          Дальше <img src={iconRight} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
