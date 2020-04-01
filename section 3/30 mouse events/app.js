const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//CLICK
// clearBtn.addEventListener('click', runEvent);

//EVENT HANDLER
// function runEvent(e) {
//     console.log(`event type: ${e.type}`);
// }

//DOUBLE CLICK
// clearBtn.addEventListener('dblclick', runEvent);

//MOUSE DOWN
// clearBtn.addEventListener('mousedown', runEvent);

// MOUSE UP
// clearBtn.addEventListener('mouseup', runEvent);

//MOUSE ENTER
// card.addEventListener('mouseenter', runEvent);

// //MOUSE LEAVE
// card.addEventListener('mouseleave', runEvent);

// //MOUSE OVER
// card.addEventListener('mouseover', runEvent);

// //MOUSE OUT
// card.addEventListener('mouseout', runEvent);

// MOUSE MOVE
card.addEventListener('mousemove', runEvent);


function runEvent(e) {
    console.log(`event type: ${e.type}`);

    heading.textContent = `X: ${e.offsetX} Y: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}