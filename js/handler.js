let bg = document.querySelector('#sky');
let moon = document.querySelector('#moon');
let mountain = document.querySelector('#mountain');
let road = document.querySelector('#road');
let text = document.querySelector('.text');

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = 'calc(70vw - '+ value*0.8 +'px)';
    mountain.style.top = 'calc(35vh - '+ value*0.3 +'px)';
    road.style.top = 'calc(70vh - '+ value*0.1 +'px)';
    text.style.top = value * 0.7  + 'px';
})