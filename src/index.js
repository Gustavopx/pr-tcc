import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/App.js';
import Home from './pages/home.js';
import Login from './login.js';
import Menu from './menu.js';
import Menu2 from './menu2.js';
import Menu3 from './menu3.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/menu2' element={<Menu2 />} />
      <Route path='/menu3' element={<Menu3 />} />
      <Route path='/app' element={<App />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


