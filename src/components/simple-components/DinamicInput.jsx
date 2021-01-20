import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputGroup from './InputGroup';


const DynamicInput = ({ label, name, handleDynamicInputChange }) => {
    const [fields, setFields] = useState([{ value: '' }]);
    const handleChange = (i, e) => {
        const elem = { value: e.target.value };
        const newArray = [...fields];
        newArray.splice(i, 1, elem);
        setFields(newArray);
        const arr = newArray.map(i => i.value);
        handleDynamicInputChange(name, arr);
    };
    const handleAdd = () => {
        const values = [...fields];
        values.push({ value: '' });
        setFields(values);
    };
    const handleRemove = (id) => {
        let values = [...fields];
        values.splice(id, 1)
        setFields(values);
    };
    return (
        <div className='dynamic-input'>
            <div><span>{label}</span></div>
            
            {fields.map((field, id) =>
                <div key={`${field}-${id}`} className='input'>
                    <InputGroup
                        type='text'
                        handleChange={(e) => handleChange(id, e)}
                        value={field.value}
                        name={name}

                    />
                    <button type="button" onClick={() => handleRemove(id)} className='btns'>
                        <img src='/assets/images/icons/delete.svg' />
                    </button>
                </div>
            )}
            <button type="button" onClick={() => handleAdd()} className='btns add'>
                <img src='/assets/images/icons/add.svg' />
            </button>
        </div>
    );
};
DynamicInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleDynamicInputChange: PropTypes.func.isRequired,
};

export default DynamicInput;