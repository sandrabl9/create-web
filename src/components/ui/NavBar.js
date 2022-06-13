import { NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav>
       
            <div>

                <NavLink  
                    to="/collections"
                >
                    collections
                </NavLink>

                <NavLink 
                    to="/about"
                >
                    About
                </NavLink>

                <NavLink 
                    to="/sales"
                >
                    Sales
                </NavLink>
            </div>     
            
        </nav>
    )
}