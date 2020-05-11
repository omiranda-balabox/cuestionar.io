import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxthunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxthunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
          <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);