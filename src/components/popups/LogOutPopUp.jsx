import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const LogOutPopUp = ({ visible, setVisible, handleCancel, handleSubmit }) => {
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
                <div className='logOut-popup-header'>Are you sure to log out ?</div>
                <div className='button-container'>
                    <div className='btn save' onClick={handleSubmit}>Yes</div>
                    <div className='btn cancel' onClick={handleCancel}>No</div>
                </div>
            </div>
        </Modal>
    )
};

LogOutPopUp.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
};

export default LogOutPopUp;

