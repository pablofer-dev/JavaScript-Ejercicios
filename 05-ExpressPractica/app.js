const express = require('express');
const path = require('path');
const app = express();
const port = 9090;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/hola', (req, res) => {
    res.send(`<h1>${req.query.nombre}</h1>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})