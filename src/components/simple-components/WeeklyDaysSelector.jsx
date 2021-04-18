import React from 'react';
import PropType from 'prop-types';

import { Select } from 'antd';

const { Option } = Select;

const children = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];
const WeeklyDaysSelector = ({ onChange }) => {
    return (
        <div className='input-group'>
            <span className='label'>Select week days</span>
            <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select week days"
                onChange={onChange}
            >
                {children.map((option, i) => <Option key={option} value={i}>
                    {option}
                </Option>)
                }
            </Select>
        </div>
    )
};

WeeklyDaysSelector.propTypes = {
    onChange: PropType.func.isRequired,
}

export default WeeklyDaysSelector;
