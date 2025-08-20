// get elements by tag name
const paragraphs = document.getElementsByTagName("p");
// if not found then return an empty array => [];
// console.log(paragraphs)

// get element by id;
const foodHeading = document.getElementById("food-heading");
// if not found then return => null;
// console.log(foodHeading.innerText = "Yeeeeeeee Deshi")

// get elements by class name
const listItems = document.getElementsByClassName("deshi");
// if not found then return an empty array => [];
// for(let item of listItems){
//     console.log(item.textContent)
// }
// console.log(listItems)

// query selector all
const deshi = document.querySelectorAll(".foods .deshi");
// console.log(deshi)

const myQuerySelector = document.querySelectorAll("#city p span");
// if not found then return empty nodeList => []

// console.log(myQuerySelector)

// query selector
const myQuerySelector2 = document.querySelector("#city p span");
// if not found then return => null;
// console.log(myQuerySelector2)

{
  //   const container2 = document.getElementById('container2');
  //   console.log(container2)
  const para1 = document.getElementById("para1");
  const classList = para1.classList;
  const addClass = para1.classList.add("para1");
  const removeClass = para1.classList.remove("text-3xl");
  const getIdAttribute = para1.getAttribute("id");
  const getClassAttribute = para1.getAttribute("class");
  const setAnAttribute = para1.setAttribute("title", "tooltip by js");
//   console.log(getClassAttribute);
}

function interAction() {
  const btn = document.getElementById("eventBtn");
  btn.style.color = "green";
  btn.style.padding = "10px";
  btn.style.borderRadius = "10px";
  btn.style.backgroundColor = "purple";
  btn.style.color = "white";
  btn.style.border = "none";
}

function showLink() {
  const anchor = document.getElementById("anchor");
  const href = anchor.getAttribute("href");
  document.getElementById("show-link").innerText = href;
}

// change image
{
  function changeImage() {
    const image = document.getElementById("image");
    image.setAttribute('src', 'https://images.unsplash.com/photo-1755479595813-e7dca32937cb?')
    
  }
}


{
  const nodes = document.getElementById('city');
  // console.log(nodes.childNodes[3].childNodes[1].childNodes[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
}
 
// append child
{
   const ul = document.getElementById('city-list');
   const li = document.createElement('li');
   li.innerText = "Barisal";
   ul.appendChild(li)
}




// parent node;
const main = document.getElementById('main');
// create a child node;
const section = document.createElement('section')
const ul = document.createElement('ul')

const li1 = document.createElement('li');
li1.innerText = "list item one!";
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = "list item two!";
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = "list item three!";
ul.appendChild(li3)

section.appendChild(ul)
main.appendChild(section)



// easiest way to create and append element 
