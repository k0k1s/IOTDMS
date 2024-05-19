const Device = require('../models/Device');

const addDevice = async (name, ownerId) => {
    return Device.create({ name, ownerId });
};

const getDevices = async (ownerId) => {
    return Device.findAll({ where: { ownerId } });
};

const getDeviceById = async (id) => {
    return Device.findByPk(id);
};

const updateDevice = async (id, data) => {
    const device = await Device.findByPk(id);
    if (!device) {
        throw new Error('Device not found');
    }
    Object.assign(device, data);
    return device.save();
};

const deleteDevice = async (id) => {
    const device = await Device.findByPk(id);
    if (!device) {
        throw new Error('Device not found');
    }
    return device.destroy();
};

module.exports = { addDevice, getDevices, getDeviceById, updateDevice, deleteDevice };
