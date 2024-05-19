const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const rateLimiter = require('./middleware/rateLimiter');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const deviceRoutes = require('./routes/deviceRoutes');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', rateLimiter, authRoutes);
app.use('/api/devices', rateLimiter, deviceRoutes);

app.use(errorHandler);

module.exports = app;
