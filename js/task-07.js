
const inputSizeControl = document.querySelector('input#font-size-control');

const changeSizeText = document.querySelector('span#text');

inputSizeControl.addEventListener('change', event => {
  changeSizeText.style.fontSize = `${event.target.value}px`;
})