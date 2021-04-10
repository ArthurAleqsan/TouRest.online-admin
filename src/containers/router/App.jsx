import React from 'react';
import Header from '../../components/header/Header';
import NestedRouter from './NestedRouter';

const App = () => {
    return (
        <>
            <Header />
            <div className='main-content'>
                <NestedRouter />
            </div>
        </>
    )
};

export default App;
