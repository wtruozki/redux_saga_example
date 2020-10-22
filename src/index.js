import React from 'react';
import ReactDOM from 'react-dom';

// redux
import {Provider} from 'react-redux';
import store from "./store"

// components
import App from './components/App/container';

// styles
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// axios
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
