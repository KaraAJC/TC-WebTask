import React from 'react';
import ReactDOM from 'react-dom';

import Cars from './components/cars';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  // <h1>TC WebTask</h1>,
  <Cars />,
  document.getElementById('app')
);
