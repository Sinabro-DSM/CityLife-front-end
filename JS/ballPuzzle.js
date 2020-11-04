const basketNumber = document.getElementsByClassName("ballBasket");
const ballNumber = document.getElementsByClassName("ball");
let reset;
let count=0; // 공이 선택된 횟수 
let checkball=[];

document.getElementById("completeModal").style.display="none"; // 모달창 none

for(let i in basketNumber){ // #text요소 취급 X
    for(let j in basketNumber[i].childNodes) {
        if(basketNumber[i].childNodes[j].nodeName=="#text"){
            basketNumber[i].childNodes[j].remove()
        }
    }
}

function exitModal(){
    document.getElementById("completeModal").style.display="none";
}

function complete(){ // 완성된 경우
    let bottlecount=0;
    for(let i in basketNumber){
        let ballcount=0;
        let before;
        try{
            before=basketNumber[i].childNodes[0].classList[1];
        }catch{
            before={};
        }
        for(let j in basketNumber[i].childNodes) {
            if(typeof(basketNumber[i].childNodes[j])=="object"){
                try{
                    if(before==basketNumber[i].childNodes[j].classList[1]){
                        ballcount++;
                    }
                    else{
                        before=basketNumber[i].childNodes[j].classList[1];
                        break;
                    }
                }catch{
                    before=basketNumber[i].childNodes[j].classList[1];
                    break;  
                }
            }
        }
        if(ballcount==4){
            bottlecount++;
        }
        ballcount=0;
    }
    if(bottlecount==4){
        return 1;
    }
    return 0;
}

function selectionBall(ball) { // 선택된 공 표시
    ball.classList.add('clickBall');
    count=1;
}

function set(){
    reset=document.getElementsByClassName("container")[0].innerHTML; // reset에 container을 저장
    try{
        for(let i in basketNumber){
            basketNumber[i].addEventListener("click", function() {
                if (basketNumber[i].childNodes.length>0 && count < 1) { // basket에 넣을 수 있는지 확인
                    while(1){
                        if(basketNumber[i].firstChild.nodeName!="#text"){
                            selectionBall(basketNumber[i].firstChild);
                            break;
                        }
                        else{
                            basketNumber[i].removeChild(basketNumber[i].firstChild);
                        }
                    }
                }
                else{
                    if(count==1 && basketNumber[i].childElementCount<4 || basketNumber[i].firstChild.classList[2]=="clickBall"){ // 공 옮길 수 있는 조건
                        
                        let moveBall=document.getElementsByClassName("clickBall")[0];
                        try{
                            if(basketNumber[i].firstChild.classList[1]!=moveBall.classList[1]){
                                alert("공의 색이 달라요!");
                                return;
                            }
                        }catch{}
                        basketNumber[i].insertBefore(moveBall,basketNumber[i].firstChild);
                        moveBall.classList.remove('clickBall');
                        count=0;
                        let check=complete();
                        if(check==1){
                            document.getElementById("completeModal").style.display="flex";
                        }
                    }else{
                        alert("다시 선택하세요.");
                    }
                }
            })
        }
    }
    catch{
    }
}

set(); // set함수 실행으로 게임 진행

function resetsave(){
    count=0;
    document.getElementsByClassName("container")[0].innerHTML=reset;  
}

function resetButtonClick(){ //  그 판의 첫 배열
    alert('reset');
    resetsave();
    set(); // set함수 실행으로 게임 진행
}

function randomNumber(){
    while(1){
        let count=Math.floor(Math.random()*(48));
        if(checkball.indexOf(count)>-1){
            continue;
        }
        else{
            checkball.push(count);
            break;
        }
    }
}

function changeRoundButtonClick(){ // 새로운 배열 통에 4개씩 넣기, 색 바꾸기
    alert('change');
    checkball=[];
    resetsave();
    let color=["violet", "pink", "red", "orange", "yellow", "mint", "olive", "green", "skyblue", "blue", "brown", "gray"];
    for(let i=0;i<48;i++){
        randomNumber();
    }
    for(let i=0;i<48;i++){
        checkball[i]=checkball[i]%12;
    }
    let ballcount=0
    for(let i in basketNumber){
        for(let j in basketNumber[i].childNodes) {
            if(typeof(basketNumber[i].childNodes[j])=="object"){
                let temp=basketNumber[i].childNodes[j].classList;
                temp.remove(temp[1]);
                temp.add(color[checkball[ballcount]]); 
                ballcount++;
            }   
        }
    }
    set(); // set함수 실행으로 게임 진행
}