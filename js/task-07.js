const controller = document.getElementById('font-size-control');
const text = document.getElementById('text');

controller.addEventListener('input', handleResize);

function handleResize(event) {
    text.style.fontSize = `${event.currentTarget.value}px`
};
