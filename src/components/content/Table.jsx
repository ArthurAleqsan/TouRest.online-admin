import React from 'react';
import { useHistory } from "react-router-dom";

import { Col, } from 'antd';
import PropType from 'prop-types';


const Table = ({ data, cols, path }) => {
    const history = useHistory();
    const handleRedirectToEdit = (id) => {
        history.push(`/${path}/edit/id=${id}`);
    };
    return (<>
        {cols.map((item, i) => {
            return <Col key={i} span={item.sp}>
                <div>
                    {item.key == 'url' ? <img src={data[item.key]} /> : <span>{data[item.key]}</span>}
                </div>
            </Col>
        })}
        < Col className="gutter-row" >
            <div>
                <span onClick={() => handleRedirectToEdit(data.id)}>edit</span>
                <span>remove</span>
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
