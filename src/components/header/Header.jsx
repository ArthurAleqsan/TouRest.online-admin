import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutPopUp from '../popups/LogOutPopUp';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/user/user.actions';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const handleCancel = () => {
        setVisible(false);
    };
    const handleSubmit = () => {
        logout(dispatch);
        setVisible(false);
    };
    const openModal = () => {
        setVisible(true)
    }
    return (
        <header className='header'>
            <Link to='/'>
                <img src='/assets/images/logo.png' className='logo' />
            </Link>
            <div className='log-out'>
                <span className='logout' onClick={openModal}>Log out</span>
                <img src={'/assets/images/icons/logout.svg'} alt='log-out' className='img' />
            </div>
            <LogOutPopUp
                visible={visible}
                setVisible={setVisible}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
            />
        </header>
    )
}

export default Header;
