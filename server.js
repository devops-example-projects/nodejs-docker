'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Nodejs App on Docker');
});
app.get('/1', (req, res) => {
  res.send('<h1>OM NAMAHA SHIVAYA OM NAMO NARAYANAYA RAMA RAMA RAMA SHIVA SHIVA SHIVA</h1>');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
