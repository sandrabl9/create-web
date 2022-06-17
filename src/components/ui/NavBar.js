import { NavLink } from 'react-router-dom'
import { Nav } from './NavBarStyle'

export const Navbar = () => {
  return (
    <Nav>
      <NavLink to='/collections'>Colecciones</NavLink>

      <NavLink to='/products'>Productos</NavLink>

      <NavLink to='/sales'>Ofertas</NavLink>

      <NavLink to='/about'>Conócenos</NavLink>
    </Nav>
  );
};
