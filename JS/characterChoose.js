const pointer = [
    document.querySelector('.selectionPointer1'),
    document.querySelector('.selectionPointer2'),
    document.querySelector('.selectionPointer3'),
    document.querySelector('.selectionPointer4')
]
const character = [
    document.querySelector('.hedgehog'),
    document.querySelector('.raccoon'),
    document.querySelector('.crow'),
    document.querySelector('.squirrel')
]
let count=0, beforeCilckPointer, beforeCilckCharacter;

for(let i=0; i<4; i++){
    character[i].addEventListener('click', function() {
        if(count==0){
            beforeCilckPointer = pointer[i];
            beforeCilckCharacter = character[i];
            pointer[i].classList.add('pointerClick');
            character[i].classList.add('characterClick');
            count=1;
        }
        else{
            beforeCilckPointer.classList.remove('pointerClick');
            beforeCilckCharacter.classList.remove('characterClick');
            beforeCilckPointer = pointer[i];
            beforeCilckCharacter = character[i];
            pointer[i].classList.add('pointerClick');
            character[i].classList.add('characterClick');
        }
    })
}