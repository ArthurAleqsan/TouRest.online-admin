import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className = 'navigation'>
            <Link to='/'>
                <span>statistic</span>
            </Link>
            <Link to='/tours'>
                <span>tours</span>
            </Link>
            <Link to='/categories'>
                <span>categories</span>
            </Link>
            <Link to='/blog'>
                <span>blog</span>
            </Link>
            <Link to='/users'>
                <span>users</span>
            </Link>
            <Link to='/orders'>
                <span>orders</span>
            </Link>
        </nav>
    )
};

export default Navigation;
