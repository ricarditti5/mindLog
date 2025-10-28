//Variables declared
const pensamentoDiv = document.getElementById('messagesArea');
const inputThinker = document.getElementById('inputText');
const btnSend = document.getElementById('btn');

//Functions

function adicionarItem(){
    let paragrafo = document.createElement('p');
    paragrafo.className = 'item';
    paragrafo = inputThinker.textContent.trim();
    pensamentoDiv.appendChild(paragrafo);
}

btnSend.addEventListener('click', adicionarItem());