import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDevices = createAsyncThunk('devices/fetchDevices', async () => {
    const response = await axios.get('/api/devices');
    return response.data;
});

export const addDevice = createAsyncThunk('devices/addDevice', async (deviceData) => {
    const response = await axios.post('/api/devices', deviceData);
    return response.data;
});

const deviceSlice = createSlice({
    name: 'devices',
    initialState: {
        devices: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDevices.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDevices.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.devices = action.payload;
            })
            .addCase(fetchDevices.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addDevice.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addDevice.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.devices.push(action.payload);
            })
            .addCase(addDevice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default deviceSlice.reducer;
