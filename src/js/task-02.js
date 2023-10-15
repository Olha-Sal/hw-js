const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listForAddingItems = document.querySelector(`#ingredients`);

const addListItems = (ingredients) => {
  const listIngredients = ingredients.map(ingredient => {
    const listIngred = document.createElement('li');
    listIngred.textContent = ingredient;
    return listIngred;
  });
  listForAddingItems.append(...listIngredients);
};

addListItems(ingredients);
