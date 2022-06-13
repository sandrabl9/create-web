import { useAuth } from '../context/authContext';
import { Navigate } from 'react-router-dom';


export const ProtectedRoute = ({children}) => {
 const { user, loading } = useAuth();  

 if (loading) return <h1>LOADING</h1>;

 if (!user) return <Navigate to='auth/login' />;

 return <>{children}</>
}

// No estoy utilizando este componente aún, para utilizarlo ir a las rutas y envolver la ruta que quieras proteger con este componente