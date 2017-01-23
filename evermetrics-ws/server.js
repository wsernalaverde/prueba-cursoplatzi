'use strict'

const http = require('http')
const socketio = require('socket.io')
const r = require('rethinkdb')
const config = require('./config')
const server = http.createServer()
const io = socketio(server)
const port = process.env.PORT || 5151

r.connect()

server.listen(port, () => console.log(`listening on port ${port}`))
