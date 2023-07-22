import React, { } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';


let theme = createTheme();
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>

);
