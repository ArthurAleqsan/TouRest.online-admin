import React from 'react';
import Header from '../../components/header/Header';
import Navigation from '../../components/header/Navigation';
import NestedRouter from './NestedRouter';

const App = () => {
    return (
        <>
            <Header />
            <div className='main-content'>
                {/* <Navigation /> */}
                <NestedRouter />
            </div>
        </>
    )
};

export default App;
