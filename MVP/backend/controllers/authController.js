const { validationResult } = require('express-validator');
const authService = require('../services/authService');

const register = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password } = req.body;
        const user = await authService.register(username, password);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password } = req.body;
        const { user, token } = await authService.login(username, password);
        res.json({ user, token });
    } catch (error) {
        next(error);
    }
};

module.exports = { register, login };
