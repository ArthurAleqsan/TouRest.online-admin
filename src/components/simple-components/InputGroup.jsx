/* eslint-disable react/display-name */
import React, { memo } from 'react';
import PropType from 'prop-types';
import { Input } from 'antd';
const { TextArea } = Input;

const InputGroup = memo(({ label, value, handleChange, name, textArea }) => {
    return (
        <div className='input-group'>
            <span>{label}</span>
            {textArea ? <TextArea name={name} onChange={handleChange} value={value} style={{ resize: 'none' }} />
                : <Input name={name} onChange={handleChange} value={value} />}
        </div>
    )
});

InputGroup.propTypes = {
    label: PropType.string.isRequired,
    value: PropType.string.isRequired,
    name: PropType.string.isRequired,
    handleChange: PropType.func.isRequired,
    textArea: PropType.bool,
};

export default InputGroup;
