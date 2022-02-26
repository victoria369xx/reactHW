import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseLine from '@mui/material/CssBaseline';
import './fonts/fonts.js'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseLine/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

