//set local storage item
localStorage.setItem('name', 'mark');
localStorage.setItem('age', '30');

//set session storage item
// sessionStorage.setItem('name', 'el pollo loco');

//remove from storage
// localStorage.removeItem('name');

//get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

//clear local storage
// localStorage.clear();

// console.log(name, age);

// document.querySelector('form').addEventListener('submit', function(e){
//     const task = document.getElementById('task').value;
//     localStorage.setItem('task', task);
//     console.log(task);
//     alert('task saved');
//     e.preventDefault();
// });








document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('task is saved bitch');

    e.preventDefault();

});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});