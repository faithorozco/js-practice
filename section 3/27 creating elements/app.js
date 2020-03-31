// Create Element
const li = document.createElement('li');

//create class
li.className = 'collection-item';

//create id
li.id = 'new-item';

//Add attribute
li.setAttribute('title', 'new item');

//create text node and append
li.appendChild(document.createTextNode('ohhimark'));

//create new link element
const link = document.createElement('a');

//create new link class
link.className = 'delete-item secondary-content';

// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);

//append child to li as child to ul
document.querySelector('ul.collection').appendChild(li);
console.log(li);