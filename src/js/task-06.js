const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', (event) => {
 
    if (event.currentTarget.value.length == textInput.dataset.length) {
        textInput.classList.add('valid')     
    } else {
        textInput.classList.add('invalid')
    } 
    
})



