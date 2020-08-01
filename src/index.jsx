import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './Store/store'

const app=(
  <Provider store={Store}>
    <App />
  </Provider>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);

serviceWorker.unregister();