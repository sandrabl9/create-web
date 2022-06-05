import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { Login } from '../components/login';

import { Register } from '../components/Register';

export const AppRouter = () => {
  return (
   <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />
   </Routes>
  )
}
