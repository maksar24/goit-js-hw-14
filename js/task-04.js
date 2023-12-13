let counterValue = 0;

const value = document.getElementById('value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

const handleClickDecrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const handleClickIncrement = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

btnDecrement.addEventListener('click', handleClickDecrement);
btnIncrement.addEventListener('click', handleClickIncrement);