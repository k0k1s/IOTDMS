import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices } from '../redux/slices/deviceSlice';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const dispatch = useDispatch();
    const devices = useSelector((state) => state.devices.devices);
    const deviceStatus = useSelector((state) => state.devices.status);

    useEffect(() => {
        dispatch(fetchDevices());
    }, [dispatch]);

    if (deviceStatus === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <Link to="/add-device">Add Device</Link>
            <div>
                {devices.length === 0 ? (
                    <p>No devices found.</p>
                ) : (
                    <ul>
                        {devices.map(device => (
                            <li key={device.id}>
                                <Link to={`/device/${device.id}`}>{device.name}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
