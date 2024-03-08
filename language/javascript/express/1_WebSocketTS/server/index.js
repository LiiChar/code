const chat = require('./data/data');
const express = require('express');
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io');
const router = require('./router/router');

const PORT = 4000;
const app = express()

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
    }
})
app.use(cors({ origin: '*' }));
app.use(express.json())
app.use('/api', router)


io.on("connection", (socket) => {
    socket.on('getMessage', () => {
        socket.emit("getMessage", chat.messages);
    })
    socket.on('sendMessage', (message) => {
        chat.setMessages(message)
        io.sockets.emit('getMessage', chat.messages)
    })
});

server.listen(PORT, () => console.log('Socket await message'))