function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const changeColor = document.querySelector('button.change-color');

const bodyColor = document.querySelector('body');

const colorValue = document.querySelector('span.color');


changeColor.addEventListener('click', event => {

  let color = getRandomHexColor();

  bodyColor.style.backgroundColor = color;

  colorValue.textContent = color;
})

//