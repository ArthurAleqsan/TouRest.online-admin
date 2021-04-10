import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RemoveLogOutPopUp from '../popups/RemoveLogOutPopUp';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/user/user.actions';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const pageURL = window.location.href.split('/');
    const [activeNav, setActiveNav] = useState(pageURL[pageURL.length - 1]);
    const selectedNav = activeNav ? activeNav : '';
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
            <nav className='navigation'>
                <Link to='/' className='logo'>
                    <img src='/assets/images/logo.png' className='logo' />
                </Link>
                <Link to='/' className={`${selectedNav === '' ? 'activeNav' : ''}`} onClick={()=>setActiveNav('')}>
                    <span>Statistic</span>
                </Link>
                <Link to='/tours' className={`${selectedNav === 'tours' ? 'activeNav' : ''}`} onClick={() => setActiveNav('tours')}>
                    <span>Tours</span>
                </Link>
                <Link to='/categories' className={`${selectedNav === 'categories' ? 'activeNav' : ''}`} onClick={() => setActiveNav('categories')}>
                    <span>Categories</span>
                </Link>
                <Link to='/blog' className={`${selectedNav === 'blog' ? 'activeNav' : ''}`} onClick={() => setActiveNav('blog')}>
                    <span>Blog</span>
                </Link>
                <Link to='/users' className={`${selectedNav === 'users' ? 'activeNav' : ''}`} onClick={() => setActiveNav('users')}>
                    <span>Users</span>
                </Link>
                <Link to='/managers' className={`${selectedNav === 'managers' ? 'activeNav' : ''}`} onClick={() => setActiveNav('managers')}>
                    <span>Managers</span>
                </Link>
                <Link to='/orders' className={`${selectedNav === 'orders' ? 'activeNav' : ''}`} onClick={() => setActiveNav('orders')}>
                    <span>Orders</span>
                </Link>
                <div className='log-out'>
                    <span className='logout' onClick={openModal}>Log out</span>
                    <img src={'/assets/images/icons/logout.svg'} alt='log-out' className='img' />
                </div>
            </nav>

            <RemoveLogOutPopUp
                visible={visible}
                setVisible={setVisible}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                fromLogout={true}
            />
        </header>
    )
}

export default Header;
