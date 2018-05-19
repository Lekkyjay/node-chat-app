const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

//Configure port for both Heroku and localhost
const port = process.env.PORT || 5000;

//Create path to public folder
const publicPath = path.join(__dirname, '../public');

//Configure express static middleware to use public folder
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User was disconnected from server');
    });
});

//Start up express server on port 5000
server.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});

