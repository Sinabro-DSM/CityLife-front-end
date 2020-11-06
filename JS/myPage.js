let food = document.getElementById('ll');
let character = document.getElementById('character');
let bigCharacter = document.getElementById('bigCharacter');
let asd = document.getElementById('asd');

food.addEventListener('click', function() {
    console.log('a');
    bigCharacter.style.opacity = 1;
    
});

asd.addEventListener('click', function() {
    console.log('b');
    bigCharacter.style.opacity = 0;
});