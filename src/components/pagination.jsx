import React, { Component } from 'react';

class Pagination extends Component {
  render() { 
    const pageIndexes = [];
    for (let i = 0; i < this.props.count; i++) { pageIndexes.push(i) };
    return ( 
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          { pageIndexes.map((i) => {
            let pageItemCls = 'page-item';
            pageItemCls += this.props.activeIndex === i
              ? ' active'
              : '';
            return (
              <li
                key={i}
                className={pageItemCls}
              >
                <button
                  className="page-link"
                  onClick={() => this.props.onClick(i)}
                >
                {i + 1}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}
 
export default Pagination;