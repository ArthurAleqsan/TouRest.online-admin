import React, { useEffect } from 'react';
import { getTours } from '../../../store/tours/tour.actions';


const Tours = () => {
    useEffect(() => {
        getTours()
    }, [])
    return (
        <div className = 'tours-container'>
            
        </div>
    )
};

export default Tours;
