import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './Containers/App';
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