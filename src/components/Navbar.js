import React from 'react';

function Navbar() {
    return (
        <header className='header container'>
            <h4 className='logo'>
                <i className="fa-solid fa-earth-asia"></i>
                my travel journel
            </h4>
            <nav>
                <ul className="list-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;