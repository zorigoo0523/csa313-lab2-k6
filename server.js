const express = require('express');
const app = express();

app.get('/fast', (req, res) => res.send('ok'));
app.get('/slow', (req, res) => setTimeout(() => res.send('slow'), 100));

app.listen(3000, () => console.log('http://localhost:3000'));
