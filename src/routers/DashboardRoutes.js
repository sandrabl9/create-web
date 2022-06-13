import React from 'react';
import { useNavigate, Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/ui/NavBar';
import { useAuth } from '../context/authContext';
import { Home } from '../components/Home/Home';
import { Collections } from '../components/Collections/Collections';
import { About } from '../components/About/About';

export const DashboardRoutes = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
 
  
  const handleLogout = async() => {
    await logout();
    navigate('/login')
  }
 
 
   return (
     <>
     <div>Hola {user && user.email}</div>
     {
       user 
          ? <button onClick={handleLogout}>Logout</button>
          : <Link to='/login'>Iniciar sesión </Link>
     }
 
     <Navbar />
     <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/collections' element={< Collections />} />
           <Route path='/about' element={< About />} />
      </Routes>
     
     </>
     
   )
 }
 
