import { NavLink } from "react-router-dom";
import { Nav } from "./NavBarStyle";

export const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/collections">collections</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/sales">Sales</NavLink>
    </Nav>
  );
};
