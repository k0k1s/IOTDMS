import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import deviceReducer from './slices/deviceSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        devices: deviceReducer,
    },
});
