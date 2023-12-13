const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');
const listContent = ingredients.map(el => {
  const item = document.createElement('li');
  item.textContent = el;
  item.classList.add('item');
  return item
});
list.append(...listContent);
