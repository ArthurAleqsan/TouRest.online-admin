import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const openModal = () => {
        console.log('object');
    }
    return (
        <header className='header'>
            <Link to='/'>
                <img src='/assets/images/logo.png' className = 'logo' />
            </Link>
            <span className = 'logout' onClick={openModal}>Log out</span>
        </header>
    )
}

export default Header;
