const textInput = document.getElementById('validation-input');
const quantity = Number(textInput.dataset.length);

textInput.addEventListener('blur', handleBlur)

function handleBlur(event) {
    const textLength = event.currentTarget.value.length;
    
    if (textLength === quantity) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
};