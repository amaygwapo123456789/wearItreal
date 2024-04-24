import React, { useState } from 'react'; // Import useState
import './Navbar.css';
import logo from '../Navbar/wear.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState(""); // Initialize menu state

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" style={{ width: '100px', height: 'auto' }} />
                <p>weariTreal</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu("shop")}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("mens")}><Link style={{ textDecoration: 'none'}} to='/men'>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("womens")}><Link style={{ textDecoration: 'none'}} to='/women'>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className='nav-login-cart-count'>0</div>
            </div>
        </div>
    );
}

export default Navbar;
