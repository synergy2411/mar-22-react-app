import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore, Store } from 'redux';
import { counterReducer } from './store/reducers/counterReducer';
import { Provider } from 'react-redux';

const store: Store<AppState, ActionType> & {
  dispatch : DispatchType
} = createStore(counterReducer);


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);