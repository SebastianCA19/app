"use client"

import React from 'react';
import styled from 'styled-components';

interface PagerProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange: (page: string) => void;
  itemsPerPage?: number;
  totalItems?: number;
}

const Pager = ({ 
  currentPage = 1, 
  totalPages = 10, 
  onPageChange,
  itemsPerPage = 10,
  totalItems = 100
}: PagerProps) => {
  const maxVisiblePages = 5;

  const getPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're near the start
      if (currentPage <= 3) {
        startPage = 2;
        endPage = 4;
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      }
      
      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  const handlePageChange = (page: string) => {
    let pageNumber = parseInt(page)
    if (pageNumber !== currentPage && page !== '...' && pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(page);
    }
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <StyledWrapper>
      <div className="pager-container">
        {/* Items info */}
        <div className="items-info">
          Mostrando <span className="highlight">{startItem}</span> a <span className="highlight">{endItem}</span> de <span className="highlight">{totalItems}</span> resultados
        </div>

        {/* Pagination controls */}
        <div className="pagination">
          {/* Previous button */}
          <button
            className="page-btn prev-next"
            onClick={() => handlePageChange(String(currentPage - 1))}
            disabled={currentPage === 1}
            aria-label="Página anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="icon">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
            </svg>
          </button>

          {/* Page numbers */}
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`page-btn ${page === currentPage ? 'active' : ''} ${page === '...' ? 'ellipsis' : ''}`}
              onClick={() => handlePageChange(String(page))}
              disabled={page === '...'}
            >
              {page}
            </button>
          ))}

          {/* Next button */}
          <button
            className="page-btn prev-next"
            onClick={() => handlePageChange(String(currentPage + 1))}
            disabled={currentPage === totalPages}
            aria-label="Página siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="icon">
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
            </svg>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .pager-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding: 20px 8px;
    font-family: 'Roboto', sans-serif;
  }

  .items-info {
    font-size: 14px;
    color: #666;
    text-align: center;
  }

  .items-info .highlight {
    font-weight: 600;
    color: #fb2c36;
  }

  .pagination {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .page-btn {
    min-width: 40px;
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #e0e0e0;
    background: white;
    color: #666;
    font-size: 14px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page-btn:hover:not(:disabled):not(.ellipsis) {
    border-color: #fb2c36;
    color: #fb2c36;
    background: #fff5f5;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(251, 44, 54, 0.15);
  }

  .page-btn:active:not(:disabled) {
    transform: translateY(0);
  }

  .page-btn.active {
    background: #fb2c36;
    color: white;
    border-color: #fb2c36;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(251, 44, 54, 0.3);
  }

  .page-btn.active:hover {
    background: #e02831;
    border-color: #e02831;
    transform: translateY(-2px);
  }

  .page-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: #f5f5f5;
  }

  .page-btn.ellipsis {
    border: none;
    background: transparent;
    cursor: default;
    min-width: 30px;
  }

  .page-btn.ellipsis:hover {
    border: none;
    background: transparent;
    transform: none;
    box-shadow: none;
  }

  .page-btn.prev-next .icon {
    width: 12px;
    height: 12px;
    fill: currentColor;
  }

  @media (min-width: 768px) {
    .pager-container {
      flex-direction: row;
      justify-content: space-between;
      padding: 20px 16px;
    }

    .items-info {
      font-size: 15px;
    }

    .page-btn {
      min-width: 44px;
      height: 44px;
      font-size: 15px;
    }

    .pagination {
      gap: 10px;
    }
  }
`;

export default Pager;