const textInput = document.getElementById('name-input');
const output = document.getElementById('name-output');

const changeCurrentName = (event) => {
    if (event.currentTarget.value.trim() !== '') {
        output.textContent = event.currentTarget.value;
    } else {
        output.textContent = 'Anonymous';
    }
};

textInput.addEventListener("input", changeCurrentName);