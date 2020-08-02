const express = require('express');

const server = express();

    const carsRouter = require('../cars/carsRouter')

server.use(express.json());

    server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.json({ message: 'Server running' })
})

module.exports = server;