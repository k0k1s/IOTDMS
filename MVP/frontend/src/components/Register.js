 
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/slices/authSlice';
import { Link, useHistory } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({ username, password, email }));
        if (!auth.error) {
            history.push('/login');
        }
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit">Register</button>
                </form>
                <div className="login-link">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
                {auth.error && <p>{auth.error}</p>}
            </div>
        </div>
    );
};

export default Register;
