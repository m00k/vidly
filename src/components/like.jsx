import React from 'react';

const Like = (props) => {
  let cls = 'fa fa-heart';
  cls += props.liked ? '' : '-o';
  return (
    <i
      onClick={props.onClick}
      className={cls}
      style={{ cursor: 'pointer' }}
      aria-hidden="true"
    >
    </i>
  );
}

export default Like;