import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../src/App';
import Home from '../src/pages/home';
import Login from '../src/pages/login';
import Menu from '../src/pages/menu';
import Menu2 from '../src/pages/menu2';
import Menu3 from '../src/pages/menu3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>

      <Routes>

          <Route path='/home'element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/menu2' element={<Menu2 />} />
          <Route path='/menu3' element={<Menu3 />} />
          <Route path='/app' element={<App />}/>

      </Routes>
      </BrowserRouter>


    );