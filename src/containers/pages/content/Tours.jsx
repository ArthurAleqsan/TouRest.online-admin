import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ToursTable from '../../../components/content/ToursTable';
import { getTours } from '../../../store/tours/tour.actions';


const Tours = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getTours(dispatch);
    }, [])
    return (
        <div className = 'tours-container'>
            <ToursTable />
        </div>
    )
};

export default Tours;
