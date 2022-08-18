// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsulRef = document.querySelector('#ingredients')
console.log(ingredientsulRef)
for (let ingredient of ingredients) {
  const newliEl = document.createElement('li');
  // console.log(newliEl)
  newliEl.textContent = ingredient;
  newliEl.classList.add('item');
  ingredientsulRef.append(newliEl);
}









