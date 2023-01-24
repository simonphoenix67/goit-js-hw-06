const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const list = document.querySelector("#ingredients");

const addin = [];

ingredients.map(ingredient => {

  const addList = document.createElement("li");

  addList.className = 'item'; 

  addList.textContent = ingredient;

  addin.push(addList);
})

list.append(...addin);



// function addin(ingredients) {
//     for (let i of ingredients) {
//       const addList = document.createElement('li');
//       const unList = document.querySelector('#ingredients');
//       addList.className = 'list';
//       addList.textContent = i;
//       unList.append(addList);
//     }
  
// }


// addin(ingredients);