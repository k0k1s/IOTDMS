import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices } from '../redux/slices/deviceSlice';
import { useParams } from 'react-router-dom';

const DeviceDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const devices = useSelector((state) => state.devices.devices);
    const device = devices.find((device) => device.id === id);

    useEffect(() => {
        if (!device) {
            dispatch(fetchDevices());
        }
    }, [dispatch, device]);

    if (!device) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Device Details</h2>
            <p>Name: {device.name}</p>
            <p>Status: {device.status}</p>
        </div>
    );
};

export default DeviceDetails;
