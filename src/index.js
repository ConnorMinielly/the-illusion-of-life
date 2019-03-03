import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';
import App from './App/App';
import Home from './App/Pages/Home';
import SquashAndStretch from './App/Pages/SquashAndStretch';
import Anticipation from './App/Pages/Anticipation';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Montez');
  body {
    margin: 0;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App>
      <Router>
        <Home path="/" />
        <SquashAndStretch path="/squash-n-stretch/" />
        <Anticipation path="/anticipation/" />
      </Router>
    </App>
  </>,
  document.getElementById('root'),
);
