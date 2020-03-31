//document.getElementById()

console.log(document.getElementById('task-title'));

//get things from the element

console.log(document.getElementById('task-title').id);

//change styling

document.getElementById('task-title').style.backgroundColor = 'purple';

//Change content

document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'Task List';
document.getElementById('task-title').innerHTML = '<span>My tasks</span>';

//Easier way of doing all of this

const taskTitle = document.getElementById('task-title');

taskTitle.innerText = 'this is the task title';

//document.querySelector

document.querySelector('body').style.backgroundColor = 'black';
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-action'));
document.querySelector('li').style.color = 'tomato';
document.querySelector('li:last-child').style.color = 'pink';
document.querySelector('li:nth-child(3)').style.color = 'blue';
document.querySelector('li:nth-child(4)').textContent = 'hello world';