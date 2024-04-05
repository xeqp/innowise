let description_mode = false;
let description__btn = document.getElementById('description__btn');
let description = document.getElementById('description');

function description_move(){
    if (description_mode == false){
        description.style.bottom = '-20%';
        description_mode = true;
    } else {
        description.style.bottom = '-100%';
        description_mode = false;
    }
}



var startY;
var endY;

function handleTouchStart(event) {
    startY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
    endY = event.changedTouches[0].clientY;
    checkSwipeDirection();
}

function checkSwipeDirection() {
    var deltaY = startY - endY;
    if (deltaY > 50) {
        description_move();
    }
    if (deltaY < -50) {
        description_move();
    }
}

var element = document.getElementById('swiper');

element.addEventListener('touchstart', handleTouchStart, false);
element.addEventListener('touchend', handleTouchEnd, false);

let cards = ["./imgs/cat1.jpg", "./imgs/cat2.jpg","./imgs/cat3.jpg","./imgs/cat4.jpg","./imgs/cat5.jpg","./imgs/cat6.jpg","./imgs/cat7.jpg","./imgs/cat8.jpg","./imgs/cat10.jpg"];
let names = ["Alex, 18", "Cat","Meow, 2","Nya, 5","Zhrekm, 9","Sam, 24","NoJS, 999","Pasha, 21","Help me, 16"];

function rnd(){
    return Math.floor(Math.random() * 9);
}

function accept(){
    document.getElementById('card').style.backgroundImage = "url(" +cards[rnd()] +")";
    document.getElementById('text_card').innerHTML = "<h1>"+names[rnd()]+"<h1>";
}

function deny(){
    document.getElementById('card').style.backgroundImage = "url(" +cards[rnd()] +")";
    document.getElementById('text_card').innerHTML = "<h1>"+names[rnd()]+"</h1>";
}

