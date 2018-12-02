import React, { Component } from 'react';

class Like extends Component {
  render() {
    const style = this.props.liked ? '' : '-o';
      return (
        <i
          className={`fa fa-heart${style}`}
          onClick={this.props.onLiked}
        >
        </i>
      );
  }
}
 
export default Like;