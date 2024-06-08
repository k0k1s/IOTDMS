import React from 'react';
import { useSelector } from 'react-redux';
import './DeviceDetails.css';

const DeviceDetails = ({ match }) => {
    const { id } = match.params;
    const device = useSelector((state) => state.devices.find(device => device.id === parseInt(id)));

    if (!device) {
        return <p>Device not found</p>;
    }

    return (
        <div className="device-details-container">
            <h2>Device Details</h2>
            <p>Name: {device.name}</p>
            <p>Type: {device.type}</p>
            <p>Status: {device.status}</p>
        </div>
    );
};

export default DeviceDetails;
