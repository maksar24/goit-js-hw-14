const input = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const container = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function handleCreate() {
  if (input.value > Number(input.max) || input.value < Number(input.min)) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(input.value);
  }
};

function createBoxes(amount) {
  const basicSize = 30;
  
  for (let i = 0; i < amount; i++) {
    let size = basicSize + 10 * i;
    
    const element = document.createElement('div');
    element.style.cssText =
    `width: ${size}px;
    height: ${size}px;
    background-color: ${getRandomHexColor()};)`;
    container.append(element);
  }
};

function destroyBoxes() {
  container.innerHTML = '';
};

function handleDestroy() {
  destroyBoxes();
  input.value = '';
};

buttonCreate.addEventListener('click', handleCreate);
buttonDestroy.addEventListener('click', handleDestroy);
