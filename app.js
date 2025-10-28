//Variables declared
const pensamentoDiv = document.getElementById('messagesArea');
const inputThinker = document.getElementById('inputText');
const btnSend = document.getElementById('btn');


btnSend.addEventListener('click', ()=>{
    const inputItem = inputThinker.value.trim();
    if(!inputItem) return;

    const divMessage = document.createElement('div');
    divMessage.className = 'message';

    divMessage.textContent = inputItem;

    pensamentoDiv.appendChild(divMessage);
    inputThinker.value = '';
});