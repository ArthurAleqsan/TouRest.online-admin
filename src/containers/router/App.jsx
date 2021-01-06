import React from 'react';
import Header from '../../components/header/Header';
import Navigation from '../../components/header/Navigation';
import NestedRouter from './NestedRouter';

const App = () => {
    return (
        <div className = 'main-container'>
            <Header />
            <Navigation />
            <NestedRouter />
        </div>
    )
};

export default App;
