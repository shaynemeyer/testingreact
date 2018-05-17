import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter/Counter';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Counter/>,
  document.getElementById('app')
);

module.hot.accept();