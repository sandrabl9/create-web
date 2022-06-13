import React from 'react';

import { Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from '../components/ProtectedRoute';
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
   <Routes>
      <Route path='*' element={ 
        
          <DashboardRoutes/>
      
      } />
      {/* <Route path='/login' element={ <LoginScreen /> } />
      <Route path='/register' element={ <Register /> } /> */}
      <Route path='*' element={
        <AuthRouter />
      }
      />
   </Routes>
  )
}
