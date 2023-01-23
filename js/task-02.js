const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function addin(ingredients) {
    for (let i of ingredients) {
      const addList = document.createElement('li');
      const unList = document.querySelector('#ingredients');
      addList.className = 'list';
      addList.textContent = i;
      unList.append(addList);
    }
  
}


addin(ingredients);
