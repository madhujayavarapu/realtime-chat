import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import {App} from './App.jsx';
import "./styles/app.scss";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);