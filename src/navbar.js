import { NavLink } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink exact="true" to="/chips">
                Chips
            </NavLink>

            <NavLink exact="true"  to="/Soda">
                Soda
            </NavLink>

            <NavLink exact="true"  to="/snickers">
                Snickers
            </NavLink>
        </nav>
    );
}

export default Navbar;