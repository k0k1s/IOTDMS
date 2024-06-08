import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDevice } from '../redux/slices/deviceSlice';
import './AddDevice.css';

const AddDevice = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addDevice({ name, type, status }));
    };

    return (
        <div className="add-device-container">
            <h2>Add Device</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Type</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                </div>
                <div>
                    <label>Status</label>
                    <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
                </div>
                <button type="submit">Add Device</button>
            </form>
        </div>
    );
};

export default AddDevice;
