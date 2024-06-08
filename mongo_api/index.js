const express = require('express');
const db = require('./connection');
const router = require('./routes');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
//Подключение к БД
db();
//Создание express-приложения
const app = express();
const port = process.env.PORT || 6543;
// Создание сервера на основе express-приложения
const server = http.createServer(app);

const io = socketIO(server,{
    cors:{
        origin:'*'
    }
});

io.on('connection',(socket)=>{
    console.log('Connected');
    
    socket.on('disconnect',()=>{
        console.log('Disconnected');
    })
});
app.use(express.json());
app.use(cors({origin:'*'}));
app.use(router);
async function startServer(){
    await server.listen(port,(err)=>err ? console.log(err) : console.log(`The server started at ${port}`));
}
startServer();