import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/post-list-reducer';
import { Provider } from 'react-redux';
import App from "./components/App";

const store = createStore(reducer);

ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('react-app-root')
);
