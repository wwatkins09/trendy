import React from 'react';
import ReactDOM from 'react-dom';
import Root from '.components/root';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  console.log('here!!');
  ReactDOM.render(<Root />, rootEl);
});
