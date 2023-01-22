const categor = document.querySelector('ul#categories')
const items = categor.querySelectorAll('li.item')
const header2 = categor.querySelectorAll('li h2')
const allItems = document.querySelectorAll('.item ul')


const firstItem = categor.firstElementChild
const firstItemList = firstItem.querySelectorAll('ul li')

const lastItem = categor.lastElementChild
const lastItemList = lastItem.querySelectorAll('ul li')

const midleItem = lastItem.previousElementSibling
const midleItemList = midleItem.querySelectorAll('ul li')


console.log('Number of categories:', items.length)

console.log('Category:', header2[0].textContent)
console.log('Elements:', firstItemList.length)

console.log('Category:', header2[1].textContent)
console.log('Elements:', midleItemList.length)

console.log('Category:', header2[2].textContent)
console.log('Elements:', lastItemList.length)




