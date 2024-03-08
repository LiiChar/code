import React from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './components/Routers';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <BrowserRouter>
      <Routers/>
  </BrowserRouter>
);