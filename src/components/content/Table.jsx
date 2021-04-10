import React from 'react';
import { useHistory } from "react-router-dom";

import { Button, Col, } from 'antd';
import PropType from 'prop-types';


const Table = ({ data, cols, path,handleRmove }) => {
    const history = useHistory();
    const handleRedirectToEdit = (id) => {
        history.push(`/${path}/edit/id=${id}`);
    };
    return (<>
        {cols.map((item, i) => {
            return <Col key={i} span={item.sp}>
                <div>
                    {item.key == 'url' ? <div className='img-container'> <img src={data[item.key]} /> </div> : <span>{data[item.key]}</span>}
                </div>
            </Col>
        })}
        <Col span={3}>
            <div className='btns-container'>
                <Button type='primary' className='button' onClick={() => handleRedirectToEdit(data.id)}>Edit</Button>
                <Button type='danger' onClick={handleRmove}>Remove</Button>
            </div>
        </Col >
    </>)
};

Table.propTypes = {
    data: PropType.object.isRequired,
    cols: PropType.array.isRequired,
    path: PropType.string.isRequired,
}

export default Table;
