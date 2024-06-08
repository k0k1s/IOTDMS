const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Device = sequelize.define('Device', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users', 
            key: 'id'
        },
        allowNull: false
    },
}, {
    timestamps: true,
});

module.exports = Device;
