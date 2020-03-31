// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('hello world');
//     e.preventDefault();
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    // console.log('clicked');
    let val;

    //Event target element
    val = e.target;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'hello';

    //event type
    val = e.type;

    //timestamp
    val = e.timeStamp;

    //coords events related to the window
    val = e.clientY;
    val = e.clientX;

    //coords events related to the element
    val = e.offsetY;
    val = e.offsetX;
    console.log(val);
}