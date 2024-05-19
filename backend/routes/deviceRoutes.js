const express = require('express');
const { check } = require('express-validator');
const deviceController = require('../controllers/deviceController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', [
    authMiddleware(),
    check('name', 'Name is required').not().isEmpty()
], deviceController.addDevice);

router.get('/', authMiddleware(), deviceController.getDevices);
router.get('/:id', authMiddleware(), deviceController.getDeviceById);
router.put('/:id', authMiddleware(), deviceController.updateDevice);
router.delete('/:id', authMiddleware(), deviceController.deleteDevice);

module.exports = router;
