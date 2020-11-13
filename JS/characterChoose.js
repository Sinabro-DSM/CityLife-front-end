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
let count=0, beforeCilckPointer, beforeCilckCharacter, index;

for(let i=0; i<4; i++){
    character[i].addEventListener('click', function() {
        if(count==0){
            beforeCilckPointer = pointer[i];
            beforeCilckCharacter = character[i];
            pointer[i].classList.add('pointerClick');
            character[i].classList.add('characterClick');
            count=1;
            index = i+1;
        }
        else{
            beforeCilckPointer.classList.remove('pointerClick');
            beforeCilckCharacter.classList.remove('characterClick');
            beforeCilckPointer = pointer[i];
            beforeCilckCharacter = character[i];
            pointer[i].classList.add('pointerClick');
            character[i].classList.add('characterClick');
            index = i+1;
        }
    })
}

let startButton = document.getElementsByClassName('startMent')[0];
// const token = {headers:{'access-token': localStorage.getItem('accessToken')}}
const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VySWQiLCJpYXQiOjE2MDUyNzU2NjAsImV4cCI6MzYwMDE2MDUyNzU2NjB9.M4il0CtNPjghIydNyZy-ghN89G__8exyVSxQtjOIm6g';

startButton.addEventListener('click', () => {
    if(index==undefined){
        alert('캐릭터를 선택해주세요!');
    }
    else{
    console.log(index);
    axios({
        url: 'http://13.125.38.255:3000' + '/user/info',
        method: 'post',
        data : {
            "character": index
        },
        headers:{
            'access-token': header
        }
    }).then((res)=>{
        console.log(res);
        window.location.href = './../HTML/cityLife.html'
    })
}
})