// Replace element

const newHeading = document.createElement('h2');

//add element
newHeading.id = 'task-title';

//new text node 
newHeading.appendChild(document.createTextNode('tasksmark'));

//get the old heading
const oldHeading = document.getElementById('task-title');

//parent
const cardAction = document.querySelector('.card-action');

//replace child
cardAction.replaceChild(newHeading, oldHeading);

//remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list element
lis[0].remove();

//remove child element
list.removeChild(lis[3]);

//CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
//classes
let val;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
val = link;

//attributes
val = link.getAttribute('href')

console.log(val);
