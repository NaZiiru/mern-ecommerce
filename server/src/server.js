const express = require('express');
const connectDB = require('./config/mongoose');
const config = require('../config');

const app = express();

connectDB();

app.use(express.json());

const PORT = config.port;
   app.listen(PORT, () => {
     console.log(`Server running on http://localhost:${PORT}`);
   }); 