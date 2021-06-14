// Add an event listener to the start button, so that the cat starts moving across the screen when its clicked.
// Add an event listener to the stop button, so that the cat stops moving when clicked.
// Add an event listener to the speed button, so that the cat moves faster when it's clicked.


let movePixels = 10;
const delayMs = 50;
let catTimer = null; //null has no value



//cat placement and movement start recording 
function catWalk () {
    var img = document.getElementsByTagName ('img') [0];
    var currentLeft = parseInt (img.style.left);
    img.style.left = (currentLeft + movePixels) + 'px';
    if (currentLeft > (window.innerWidth - img.width)) {
        img.style.left = '0px';
    }
}

function startcatWalk () {
    catTimer = window.setInterval (catWalk, delayMs );
}

function onStartClick () {startcatWalk();}

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', onStartClick);

function onStopClick () {
    window.clearInterval (catTimer);
}

const stopButton = document.getElementById ('stop-button')
stopButton.addEventListener ('click', onStopClick);

//speed functionality
function onSpeedClick () {
    movePixels += 2; //moves 2pixels 
    let speed = movePixels * (1000/20);
    document.getElementById('info').innerHTML = 'The Cat is Running;' + speed + 'px/second'
}


var speedButton = document.getElementById ('speed-button');
speedButton.addEventListener('click', onSpeedClick);
