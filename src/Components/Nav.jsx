import './Nav.css'
import { NavLink } from 'react-router-dom';
function Nav() {

    return (
        <ul>
            <li  ><NavLink to="/home">Home</NavLink></li>
            <li ><NavLink to="/login">login</NavLink></li>
            <li><NavLink to="/movie">movie</NavLink></li>
            <li><NavLink to="/mui">About</NavLink></li>
        </ul>
    )

}

export default Nav;

