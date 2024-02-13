const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();


botaoEnviar.addEventListener('click', () => {
    if (caixaMensagem.value !== '') {
        socket.emit('nova mensagem', caixaMensagem.value);
        caixaMensagem.value = '';   
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li'); // <li></li>
    elementoMensagem.textContent = msg; // <li>mensagem</li>
    elementoMensagem.classList.add('mensagem'); // <li class="mensagem">mensagem</li>
    chat.appendChild(elementoMensagem); // <div id="mensagens"><li class="mensagem">mensagem</li></div>
})