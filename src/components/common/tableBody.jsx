import React, { Component } from 'react';
import getFromPath from '../../utils/getFrompath';

class TableBody extends Component {
  renderCell = (item, column) => 
    column.content
      ? column.content(item)
      : getFromPath(item, column.path)
  ;

  render() { 
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => <tr>
          {columns.map(column => <td>{this.renderCell(item, column)}</td>)}
        </tr>)}
      </tbody>
    );
  }
}
 
export default TableBody;