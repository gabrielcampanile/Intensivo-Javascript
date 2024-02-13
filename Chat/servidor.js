const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

// () => {} arrow function

io.addListener('connection', (socket) => {
    console.log('um usuário conectou-se ao servidor');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
})

aplicacao.use(express.static('public'));

servidorHttp.listen(1000, '192.168.0.22');