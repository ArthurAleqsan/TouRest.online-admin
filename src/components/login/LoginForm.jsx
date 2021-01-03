import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Form, Input, Button, Checkbox, message } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const LoginForm = ({ login }) => {
    const dispatch = useDispatch()
    const onFinish = values => {
        login(dispatch, { username: (values.user.email), password: values.password });
    };

    const onFinishFailed = errorInfo => {
        return message.error(errorInfo);
    };
    return (
        <div className='login-form-container'>
            <div className='login-header'>
                <span>Login</span>
            </div>
            <div className='login-form'>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name={['user', 'email']}
                        label="E-Mail Adress"
                        rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};
LoginForm.propTypes = {
    login: PropTypes.func,
}
export default LoginForm;