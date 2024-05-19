import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import './Login.css'; // Import the CSS file
import loginImage from '../assets/login-image.jpg'; // Replace with your image path

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ username, password }));
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="additional-links">
                    <a href="/">Forgot username?</a>
                    <span> | </span>
                    <a href="/">Forgot password?</a>
                </div>
                <div className="register-link">
                    <p>Don't have an account? <a href="/">Register here</a></p>
                </div>
                {auth.error && <p>{auth.error}</p>}
            </div>
            <div className="login-image">
                <img src={loginImage} alt="Login" />
            </div>
        </div>
    );
};

export default Login;
