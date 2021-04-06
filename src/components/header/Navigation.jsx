import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className = 'navigation'>
            <Link to='/'>
                <span>Statistic</span>
            </Link>
            <Link to='/tours'>
                <span>Tours</span>
            </Link>
            <Link to='/categories'>
                <span>Categories</span>
            </Link>
            <Link to='/blog'>
                <span>Blog</span>
            </Link>
            <Link to='/users'>
                <span>Users</span>
            </Link>
            <Link to='/managers'>
                <span>Managers</span>
            </Link>
            <Link to='/orders'>
                <span>Orders</span>
            </Link>
        </nav>
    )
};

export default Navigation;
