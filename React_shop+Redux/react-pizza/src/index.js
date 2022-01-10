import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Routes } from 'react-router-dom';

import { Provider } from "react-redux";

import store from './redux/store'

import './scss/app.scss';

import App from './App';



ReactDOM.render(
    <Routes>
      <Provider store={store}>
        <App/>
      </Provider>
    </Routes>,
  document.getElementById('root'),
);
