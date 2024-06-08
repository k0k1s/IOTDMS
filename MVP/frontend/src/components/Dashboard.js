import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <div className="dashboard-links">
                <Link to="/add-device">Add Device</Link>
                <Link to="/device-details/1">View Device Details</Link>
            </div>
        </div>
    );
};

export default Dashboard;
