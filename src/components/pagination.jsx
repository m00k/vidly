import React from 'react';

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
 
export default Pagination;