import React, { Component } from 'react';
import getFromPath from '../../utils/getFrompath';

class TableBody extends Component {
  renderCell = (item, column) => 
    column.content
      ? column.content(item)
      : getFromPath(item, column.path)
  ;

  render() { 
    const { data, columns, rowKey } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr
            key={item[rowKey]}
          >
            {columns.map(column => (
              <td
                key={this.createColumnKey(item, rowKey, column)}
              >
              {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  createColumnKey(item, rowKey, column) {
    return item[rowKey] + (column.path || column.key);
  }
}

TableBody.defaultProps = {
  rowKey: '_id'
};

export default TableBody;