const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textOutput.textContent = 'Anonymous';

textInput.addEventListener('input', (event) => {
    textOutput.textContent = event.currentTarget.value;   
})






