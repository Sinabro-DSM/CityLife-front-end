let rank = document.getElementsByClassName('rank');
let k = 0;
window.onload=()=>{
  axios({
     method: 'get',
     url: 'http://13.125.38.255:3000/game/rank/3',
     headers: { 
     'access-token': localStorage.getItem('accessToken')
     }
  })
  .then((response) => {
    console.log(response);
    const rank = response.data;
    rank.map((i,j)=>{
      const rankList = document.getElementsByClassName('rank-list')[j];
      rankList.childNodes[3].innerText = i.userId;
  })
  })
  .catch((error) => {
    console.log(error);
  });
  
}
  

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
    console.log(k)
    
    let score = document.getElementById('score');
    let time = 30;
    let sec = "";
    let j = 0;
    let x = setInterval(function() {
        sec = 30-j;
        document.getElementById("time").innerHTML = "시간 : " + sec + "초";
        j++;
        if(j==31){
            const giveMoney = {"score":k,"id":3};
            let gameover = document.getElementById('over');
            let restart = document.getElementById('re');
            clearInterval(repeat);
            clearInterval(x);
            gameover.style.display = "flex";
            restart.style.display = "block";
            score.innerHTML = k  + '점';
            axios({
              method: 'post',
              url: 'http://13.125.38.255:3000/game/rank/money',
              headers: { 
                'access-token': localStorage.getItem('accessToken') 
              },
              data: giveMoney
            })
           .then((response) => {
               console.log(giveMoney.score)
              console.log(response);
           })
           .catch((error) => {
              console.log(giveMoney);
              console.log(error);
           });
        }
    }, 200);

}

function buttonChange1(){
    let buttonChange = document.getElementById('button');
    buttonChange.style.backgroundColor = "red";
    buttonChange.style.color = "white";
    buttonChange.innerHTML = "STOP";
}

function pointUp(){
    let point = document.getElementById('point');
    k+=1;
    point.innerHTML = "점수 : " + k;
    
    console.log(k);
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


