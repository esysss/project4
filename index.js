// function clickHandle(){
//     alert("i just clicked");
// }
// let Wbutton = document.querySelector('button');
// Wbutton.addEventListener('click',clickHandle);

// or we just can say:
var drumButtons = document.querySelectorAll('.drum');
for (let forCounter = 0; forCounter < drumButtons.length; forCounter++) {
    drumButtons[forCounter].addEventListener('click', function () {
        var eventkey = this.innerHTML;
        ButtonSound(eventkey);
        Anim(eventkey);
    })
}
document.addEventListener('keypress',function(event){
    var eventkey = event.key;
    ButtonSound(eventkey);
    Anim(eventkey);
})

// to play the fucking sound
function ButtonSound(letter) {
    switch (letter) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        default:
            break;
    }
}

// to show the animation in the buttons
function Anim(theKey){
    document.querySelector('.'+theKey).classList.toggle('pressed');
    setTimeout(function(){
        document.querySelector('.'+theKey).classList.toggle('pressed')
    },100);
}