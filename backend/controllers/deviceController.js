const deviceService = require('../services/deviceService');

const addDevice = async (req, res, next) => {
    try {
        const { name } = req.body;
        const ownerId = req.user.id;
        const device = await deviceService.addDevice(name, ownerId);
        res.status(201).json(device);
    } catch (error) {
        next(error);
    }
};

const getDevices = async (req, res, next) => {
    try {
        const ownerId = req.user.id;
        const devices = await deviceService.getDevices(ownerId);
        res.json(devices);
    } catch (error) {
        next(error);
    }
};

const getDeviceById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const device = await deviceService.getDeviceById(id);
        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }
        res.json(device);
    } catch (error) {
        next(error);
    }
};

const updateDevice = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const device = await deviceService.updateDevice(id, data);
        res.json(device);
    } catch (error) {
        next(error);
    }
};

const deleteDevice = async (req, res, next) => {
    try {
        const { id } = req.params;
        await deviceService.deleteDevice(id);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
};

module.exports = { addDevice, getDevices, getDeviceById, updateDevice, deleteDevice };
