let groupPhoto = document.getElementById('group');
let yallyPhoto = document.getElementById('yally');
let talkPhoto = document.getElementById('talk');
let firstBtn = document.getElementById('firstBtn');
let secondBtn = document.getElementById('secondBtn');
let thirdBtn = document.getElementById('thirdBtn');
let starBtn = document.getElementById('startBtn');
let start = document.getElementById('start');
let startContent = document.getElementById('startContent');

firstBtn.addEventListener('click', ()=>{
    if(yallyPhoto.style.transform == "translateX(-102.7%)"){
        groupPhoto.style.zIndex = '2';
        groupPhoto.style.transition = '0.3s';
        yallyPhoto.style.transition = '0.3s';
        groupPhoto.style.transform = "translateX(0%)";
        yallyPhoto.style.transform = "translateX(0%)";
        talkPhoto.style.transform = "translateX(0%)";
    }
    else if(yallyPhoto.style.transform == 'translateX(102.7%)'){
        groupPhoto.style.transition = '0.3s';
        groupPhoto.style.zIndex = '2';
        talkPhoto.style.transition = '0.3s';
        yallyPhoto.style.transform = 'translateX(0%)';
        groupPhoto.style.transform = 'translateX(0%)';
        talkPhoto.style.transform = 'translateX(0%)';
    }
});

secondBtn.addEventListener('click', ()=>{
    if(yallyPhoto.style.transform == 'translateX(102.7%)'){
        groupPhoto.style.transition = '0.3s';
        yallyPhoto.style.transition = '0.3s';
        talkPhoto.style.transition = '0.3s';
        talkPhoto.style.transition = '0.3s';
        yallyPhoto.style.transition = '0.3s';
        yallyPhoto.style.zIndex = '2';
        yallyPhoto.style.transform = 'translateX(-102.7%)';
        talkPhoto.style.transform = 'translateX(102.7%)';
        groupPhoto.style.transform = 'translateX(102.7%)';
    }
    else{
        groupPhoto.style.transition = '0.3s';
        yallyPhoto.style.transition = '0.3s';
        talkPhoto.style.transition = '0.3s';
        yallyPhoto.style.transform = 'translateX(-102.7%)';
        groupPhoto.style.transform = 'translateX(205.14%)';
        talkPhoto.style.transform = 'translateX(-102.7%)';
    }
});

thirdBtn.addEventListener('click', ()=>{
    if(yallyPhoto.style.transform == 'translateX(-102.7%)'){
        groupPhoto.style.transition = '0.3s';
        yallyPhoto.style.transition = '0.3s';
        talkPhoto.style.transition = '0.3s';
        groupPhoto.style.transform = 'translateX(102.7%)';
        yallyPhoto.style.transform = 'translateX(102.7%)';
        talkPhoto.style.transform = 'translateX(-205.14%)';
    }
    else if(yallyPhoto.style.transform = 'translateX(0%)'){
        groupPhoto.style.transition = '0.3s';
        yallyPhoto.style.transition = '0.3s';
        talkPhoto.style.transition = '0.3s';
        groupPhoto.style.transform = 'translateX(102.7%)';
        yallyPhoto.style.transform = 'translateX(102.7%)';
        talkPhoto.style.transform = 'translateX(-205.14%)';
    }
});

starBtn.addEventListener('click', () => {
    start.style.opacity = '0';
    startContent.style.opacity = '0';
    startContent.style.zIndex = '-10';
    start.style.zIndex = '-10';
});