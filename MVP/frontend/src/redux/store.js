import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import deviceReducer from './slices/deviceSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        devices: deviceReducer
    }
});
