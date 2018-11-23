const express = require('express');
const { json } = require('body-parser');

const db = require('./db/trip');

const port = 3001;

const app = express();
app.use(json);

app.listen(port, ()=> console.log(`Server listening on port: ${port} ^-^`))