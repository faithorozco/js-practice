let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;

//get child nodes

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
//TYPES OF NODES

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - text node
// 8 - Comment
// 9 - document itself
// 10 - doctype 


//get children element nodes
val = list.children;
val = list.children[1];
list.children[2].textContent = 'oh hi mark';

//children of children
val = list.children[3].children;

//first child
val = list.firstChild;
val = list.firstElementChild;

//count child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get next sibiling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

//get previous sibiling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);