const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwtConfig');
const User = require('../models/User');

const authMiddleware = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        (req, res, next) => {
            const token = req.headers['authorization'];
            if (!token) {
                return res.status(401).json({ message: 'No token provided' });
            }

            jwt.verify(token, secret, async (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                req.user = await User.findByPk(decoded.id);
                if (!req.user || (roles.length && !roles.includes(req.user.role))) {
                    return res.status(403).json({ message: 'Forbidden' });
                }

                next();
            });
        }
    ];
};

module.exports = authMiddleware;
