const express = require('express');
const connectDB = require('./config/mongoose');
const config = require('../config');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

connectDB();


app.use(
  cors({
    origin : ' http://localhost:5173/',
    method: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders : [
      'Content-Type',
      'Authorization',
      'Cache-Control',
      'Expires',
      'Pragma'
    ],
    credentials: true
  })
)

app.use(cookieParser());
app.use(express.json());

const PORT = config.port;

app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`);});