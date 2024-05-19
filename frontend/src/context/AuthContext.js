import React, { createContext, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    const login = async (username, password) => {
        const response = await api.post('/auth/login', { username, password });
        setAuth(response.data);
    };

    const logout = () => {
        setAuth(null);
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
