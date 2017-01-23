//@flow
import React from 'react';
import ReactDOM from 'react-dom';

function world(): string {
  return "world"
}

ReactDOM.render(
  <h1>Hello {world()}</h1>,
  document.getElementById('root')
);
