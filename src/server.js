const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3333;

const jwtAuthRoute = require('./routes/jwtAuthRoute');
const textsRoute = require('./routes/textsRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', jwtAuthRoute);

app.use('/api/texts', textsRoute);

app.listen(PORT);
