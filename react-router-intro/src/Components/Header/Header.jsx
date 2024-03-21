import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <nav>
                <Link to='/'>Home</Link>
                <NavLink to='/users'>Users</NavLink>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
               
            </nav>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;