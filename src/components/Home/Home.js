import React from 'react'

export const Home = () => {
  return (
    <div>Home</div>
  )
}


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// import { useAuth } from '../../context/authContext';
// import { Navbar } from '../ui/NavBar';

// export const Home = () => {
//  const { user, logout } = useAuth();
//  const navigate = useNavigate();

 
//  const handleLogout = async() => {
//    await logout();
//    navigate('/login')
//  }


//   return (
//     <>
//     <div>Hola {user && user.email}</div>
//     {
//       user 
//          ? <button onClick={handleLogout}>Logout</button>
//          : <Link to='/login'>Iniciar sesión </Link>
//     }

//     <Navbar />
    
//     </>
    
//   )
// }
