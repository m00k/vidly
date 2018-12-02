import React from 'react';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const { currentPage, itemCount, pageSize, onPageChanged } = props;

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount < 2) return null;

  let pages = [];
  for(let i=1; i <= pageCount; i++) { pages.push(i); };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => {
          let pageItemCls = 'page-item';
          pageItemCls += currentPage === page
            ? ' active'
            : '';
          return (
            <li
              key={page}
              className={pageItemCls}
            >
              <button
                className="page-link"
                onClick={() => onPageChanged(page)}
              >
                {page}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired
};

export default Pagination;