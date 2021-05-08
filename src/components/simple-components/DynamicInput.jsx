import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import InputGroup from './InputGroup';


const DynamicInput = ({ label, name, handleDynamicInputChange, initialValues = []}) => {
    const [fields, setFields] = useState([{ value: '' }]);
    useEffect(() => {
        initialValues.length && setFields(initialValues.map(value => ({value})))
    }, [initialValues])
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
            <span className='label'>{label}</span>
            {fields.map((field, id) =>
                <div key={`${field}-${id}`} className='input'>
                    <InputGroup
                        type='text'
                        handleChange={(e) => handleChange(id, e)}
                        value={field.value}
                        name={name}
                        fromDynamicInput={false}
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
    initialValues: PropTypes.arrayOf(PropTypes.string),
    handleDynamicInputChange: PropTypes.func.isRequired,
};

export default DynamicInput;