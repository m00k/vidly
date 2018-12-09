import React, { Component } from 'react';

class tableHeader extends Component {
  raiseSort = path => {
    const sortColumn = {...this.props.sortColumn};
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc'
        ? 'desc'
        : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    if (column.path !== this.props.sortColumn.path) {
      return null;
    }

    return this.props.sortColumn.order === 'asc'
      ? <i className="fa fa-sort-asc"></i>
      : <i className="fa fa-sort-desc"></i>
  };

  render() { 
    return (
      <thead>
        <tr>
          { this.props.columns.map(column => 
          <th
            className="clickable"
            key={column.path || column.key}
            onClick={() => this.raiseSort(column.path)}
          >
          {column.label}
          {this.renderSortIcon(column)}
          </th>) }
        </tr>
      </thead>
    );
  }
}
 
export default tableHeader;