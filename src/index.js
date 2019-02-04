import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/app/App';
import './assets/index.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

registerServiceWorker();
