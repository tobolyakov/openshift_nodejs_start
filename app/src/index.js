import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/rootContainer';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/" forceRefrech={!supportsHistory}>
      <Route path="/" component={App}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
