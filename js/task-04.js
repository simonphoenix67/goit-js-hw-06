
let counterValue = 0;

const displayCounter = document.querySelector('#value');
const clickMinus = document.querySelector('button[data-action="decrement"]');
const clickPlus = document.querySelector('button[data-action="increment"]');

clickMinus.addEventListener('click', () => {
	counterValue--
	displayCounter.textContent = counterValue
})

clickPlus.addEventListener('click', () => {
	counterValue++
	displayCounter.textContent = counterValue
})