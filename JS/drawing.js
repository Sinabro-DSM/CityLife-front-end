let monariza = document.getElementsByClassName('monariza');
let star = document.getElementsByClassName('star');
let sunflower = document.getElementsByClassName('sunflower');

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let slideContent = document.getElementsByClassName('slides');
let slideLen = slideContent.length;
let curIndex = 0;

next.addEventListener('click', function() {
    slideContent[curIndex%slideLen].classList.remove("visible");
    curIndex++;
    slideContent[curIndex%slideLen].classList.add("visible");
});
prev.addEventListener('click', function() {
    slideContent[curIndex%slideLen].classList.remove("visible");
    curIndex--;
    if(curIndex<0){
        curIndex=slideLen;
    }else{
        slideContent[curIndex%slideLen].classList.add("visible");
    }
});