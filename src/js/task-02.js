const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listToAdd =  ingredients.forEach((ingredient) => {
  const ingr = document.createElement("li")
  const ingridiendsUl = document.querySelector("ul");
  
  ingr.textContent = ingredient;

  ingr.classList.add("item");

  ingridiendsUl.appendChild(ingr);
  
  console.log(ingridiendsUl);
})






