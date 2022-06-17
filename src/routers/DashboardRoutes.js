import { useNavigate, Routes, Route } from 'react-router'
import { Link } from 'react-router-dom'

import { Container, LogBar } from './DashboardRoutesStyle'
import { Navbar } from '../components/ui/NavBar'
import { useAuth } from '../context/authContext'
import { Home } from '../components/Home/Home'
import { Collections } from '../components/Collections/Collections'
import { About } from '../components/About/About'
import { Sales } from '../components/Sales/Sales'
import { Products } from '../components/Products/Products'

export const DashboardRoutes = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
 
  
  const handleLogout = async() => {
    await logout();
    navigate('auth/login')
  }
 
 
   return (
     
      <Container>
        <LogBar>
            <span>Hola {user && user.email}</span>
          {
            user 
                ? <button onClick={handleLogout}>Logout</button>
                : <Link to='auth/login'>Iniciar sesión </Link>
          }
        </LogBar>

        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collections' element={< Collections />} />
            <Route path='/about' element={< About />} />
            <Route path='/sales' element={< Sales />} />
            <Route path='/products' element={< Products />} />
        </Routes>
      </Container>
      
   )
 }
 
