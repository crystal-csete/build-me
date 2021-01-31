const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require("./auth/auth-router.js");
const dinersRouter = require("./diners/diners-router.js");
const trucksRouter = require('./trucks/trucks-router.js')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/diners', dinersRouter)
server.use('/api/trucks', trucksRouter)


server.get('/', (req, res) => {
    res.json({ api: 'Server is up and running...' })
})

module.exports = server;