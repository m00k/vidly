import React from 'react';

const MovieForm = ({match}) => {
  return (
    <h1>MovieForm - {match.params.id}</h1>
  );
}
 
export default MovieForm;