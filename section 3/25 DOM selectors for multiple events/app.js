//getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[3].style.color = 'tomato';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// //getElementsByTagName

// let theLis = document.getElementsByTagName('li');
// console.log(theLis);

// //Convert HTML collection into array

// theLis = Array.from(theLis);

// theLis.reverse();

// theLis.forEach(function(theLi, index){
//     console.log(theLi.className);
//     theLi.textContent = `${index} ay wassup`;
// })

// console.log(theLis);


//document.querySelctorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index} poop`;
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.color = 'red';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.color = 'pink';
}

console.log(items);


