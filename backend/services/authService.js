const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { secret, expiresIn } = require('../config/jwtConfig');

const register = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({ username, password: hashedPassword });
};

const login = async (username, password) => {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id, role: user.role }, secret, { expiresIn });
    return { user, token };
};

module.exports = { register, login };
