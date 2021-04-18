import React, { useState } from 'react';
import { DatePicker, Divider, } from 'antd';
import PropType from 'prop-types';

const AviableDatesSelector = ({ onChange }) => {
    const [aviableDates, setAviableDates] = useState([]);
    const handleChange = (date) => {
        const d = new Date(date)
        console.log(d);

        // setAviableDates
    }
    return (
        <div className='aviable-dates-container'>
            <div></div>
            <Divider />
            <DatePicker onChange={handleChange} />
        </div>
    )
};

AviableDatesSelector.propTypes = {
    onChange: PropType.func.isRequired,
};

export default AviableDatesSelector;
