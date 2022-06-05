import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/authContext';

export const Home = () => {
 const { user, logout } = useAuth();

 
 const handleLogout = async() => {
   await logout();
 }

 // Necesito que al hacer click vaya a la pantalla de login



  return (
    <>
    <div>Hola</div>
    <button onClick={handleLogout}>Logout</button>

    { !user && <Link to='/login'>Iniciar sesión </Link> }
    
    </>
    
  )
}
