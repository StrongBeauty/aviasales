import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import store from './store/store';
import { GlobalStylesAllPages } from './SGlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStylesAllPages />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
