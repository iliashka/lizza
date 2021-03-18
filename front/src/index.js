import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './state'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
