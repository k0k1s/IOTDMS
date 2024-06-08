const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const deviceRoutes = require('./routes/deviceRoutes');
const errorHandler = require('./middleware/errorHandler');
const rateLimiter = require('./middleware/rateLimiter');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rate Limiting
app.use(rateLimiter);

// Test database connection and sync models
sequelize.authenticate()
  .then(() => {
    console.log('PostgreSQL connected...');
    return sequelize.sync();
  })
  .then(() => console.log('Database synchronized'))
  .catch(err => console.log('Error: ' + err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/devices', deviceRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error Handling Middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;