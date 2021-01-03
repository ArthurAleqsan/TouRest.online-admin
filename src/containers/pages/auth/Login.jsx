import React from 'react';
import LoginForm from '../../../components/login/LoginForm';
import { login } from '../../../store/user/user.actions';

const Login = () => {    
    return (
        <div style={{ background: '#f5f8fa', minHeight: '100vh' }}>
            <LoginForm login={login} />
        </div>
    )
};

export default Login;
