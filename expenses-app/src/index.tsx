import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { counterReducer } from './store/reducers/counterReducer';
import { resultReducer } from './store/reducers/resultReducer';

import { Provider } from 'react-redux';
import { logger } from './store/middleare/loggerMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const store: Store<AppState, ActionType> & {
  dispatch : DispatchType
} = createStore(combineReducers({
  ctr : counterReducer,
  res : resultReducer
}), composeWithDevTools());


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);