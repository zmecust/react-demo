import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import createRouter from './router'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    {createRouter()}
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
