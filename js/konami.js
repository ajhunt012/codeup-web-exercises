let allowedKeys = {
    13: 'enter',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

let konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {

    let key = allowedKeys[e.keyCode];
    let requiredKey = konamiCode[konamiCodePosition];
    if (key == requiredKey) {
        konamiCodePosition++;
        if (konamiCodePosition == konamiCode.length) {
            activateCheat();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateCheat() {


    //
    // Audio(src="https://www.myinstants.com/en/instant/metal-gear-solid-alert/?utm_source=copy&utm_medium=share").autoplay

    alert("You have successfully infiltrated!")
    alert("You have added 30 lives!");
}