import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';

const RemoveLogOutPopUp = ({ visible, setVisible, handleCancel, handleSubmit, fromLogOut }) => {
    return (
        <Modal
            visible={visible}
            setVisible={setVisible}
            onCancel={() => setVisible(false)}
            footer={null}
            closable={false}
            centered={true}
            className='logOut-popup'
        >
            <div className='logOut-popup-body'>
                <div className='logOut-popup-header'>{fromLogOut ? "Are you sure to log out ?" : `Are your sure to remove ?`}</div>
                <div className='buttons-container'>
                    <Button onClick={handleSubmit}>Yes</Button>
                    <Button type='primary' onClick={handleCancel}>No</Button>
                </div>
            </div>
        </Modal>
    )
};

RemoveLogOutPopUp.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    fromLogOut: PropTypes.bool,
};

export default RemoveLogOutPopUp;

