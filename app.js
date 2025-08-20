
// get elements by tag name
const paragraphs = document.getElementsByTagName('p')
// if not found then return an empty array => [];
// console.log(paragraphs)


// get element by id;
const foodHeading = document.getElementById('food-heading');
// if not found then return => null;
// console.log(foodHeading.innerText = "Yeeeeeeee Deshi")

// get elements by class name
const listItems = document.getElementsByClassName('deshi');
// if not found then return an empty array => [];
// for(let item of listItems){
//     console.log(item.textContent)
// }
// console.log(listItems)

// query selector all
const deshi = document.querySelectorAll('.foods .deshi');
// console.log(deshi)

const myQuerySelector = document.querySelectorAll('#city p span');
// if not found then return empty nodeList => []

// console.log(myQuerySelector)


// query selector 
const myQuerySelector2 = document.querySelector('#city p span')
// if not found then return => null;
// console.log(myQuerySelector2)



 