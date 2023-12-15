const button = document.querySelector('.change-color');
const background = document.querySelector('body');
const colorName = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }

function handleRepaint() {
  const color = getRandomHexColor();
  background.style.backgroundColor = `${color}`;
  colorName.textContent = color;
};
  
button.addEventListener('click', handleRepaint);
