import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav>
            
            <Link  
                to="/"
            >
                Home
            </Link>

            <div>
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
                </div>
            </div>

            <div>
                <ul>
                    <NavLink 
                        to="/login"
                    >
                        Logout
                    </NavLink>

                </ul>
            </div>
        </nav>
    )
}