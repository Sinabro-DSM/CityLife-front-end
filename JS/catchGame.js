var math=0;
function pictureChange(){
    let i = 0;
    var repeat = setInterval(function()
    {
        let img = document.getElementsByClassName('img');
        img[math].style.display = "none";
        var jbRandom = Math.random();
        math = Math.floor(jbRandom*8)
        img[math].style.display = "block";
    },700);

    let score = document.getElementById('score');
    let time = 30;
    let sec = "";
    let j = 0;
    let x = setInterval(function() {
        sec = 30-j;
        document.getElementById("time").innerHTML = "시간 : " + sec + "초";
        j++;
        if(j==31){
            let gameover = document.getElementById('over');
            let restart = document.getElementById('re');
            clearInterval(repeat);
            clearInterval(x);
            gameover.style.display = "flex";
            restart.style.display = "block";
            score.innerHTML = k - 1 + '점';
        }
    }, 200);

}

function buttonChange1(){
    let buttonChange = document.getElementById('button');
    buttonChange.style.backgroundColor = "red";
    buttonChange.style.color = "white";
    buttonChange.innerHTML = "STOP";
}
let k = 0;
function pointUp(){
    let point = document.getElementById('point');
    point.innerHTML = "점수 : " + k;
    k+=1;
/*     let idImg = document.getElementById('img');
    idImg.style.display = "none"; */
}

function opac1(){
    let join1 = document.getElementById('join1');
    join1.style.opacity = "1";
}
function opacnone1(){
    let join1 = document.getElementById('join1');
    join1.style.opacity = "0.7";
}

function opac2(){
    let join1 = document.getElementById('join2');
    join1.style.opacity = "1";
}
function opacnone2(){
    let join1 = document.getElementById('join2');
    join1.style.opacity = "0.7";
}

function opac3(){
    let join1 = document.getElementById('join3');
    join1.style.opacity = "1";
}
function opacnone3(){
    let join1 = document.getElementById('join3');
    join1.style.opacity = "0.7";
}


import axios from 'axios'
let lastScore;

//잠수 돈 주기
const giveMoney = JSON.stringify({"score":"score"});

const config = {
  method: 'post',
  url: 'http://13.125.38.255:3000/game/rank/money',
  headers: { 
    'access-token': 'token', 
    'Content-Type': 'application/json'
  },
  giveMoney : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

//랭킹 띄우기
const data = '';

var config = {
  method: 'get',
  url: 'http://13.125.38.255:3000/game/rank/',
  headers: { 
    'access-token': 'token1324'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

