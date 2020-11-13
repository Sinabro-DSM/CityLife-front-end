let word = document.getElementById('word');
let input = document.getElementById("in");
let btn = document.getElementById('btn');
let out = document.getElementById('out');
let list = document.getElementById('list');
let array = [];
let startWord = ['기차', '사과', '끝말잇기', '돼지', '노트북', '시나브로', '동아리' , '학교', '기숙사', '과일'];
let startSize = startWord.length;
let size = Math.floor(Math.random() * startSize);
let randomWord =  startWord[size];
let randomSize = randomWord.length - 1;
let start = document.getElementById('start-word');
let score = document.getElementById('score');
let rank = document.getElementsByClassName('rank');
let ranking = [];
window.onload=()=>{
   axios({
      method: 'get',
      url: 'http://13.125.38.255:3000/game/rank/1',
      headers: { 
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VySWQiLCJpYXQiOjE2MDUxODg3ODUsImV4cCI6MTYwNTI3NTE4NX0.PubknmKAuR0WYqCPz9viz3bs-Afl0XlPXeCiJiB1DaI' 
      }
   })
   .then((response) => {
      console.log(response);
      const rank = response.data;
      rank.map((i,j)=>{
         console.log(i);
         let a = document.getElementsByClassName("rank-list")[j];
         a.childNodes[3].innerText=i.userNickname;
      });
   })
   .catch((error) => {
      console.log(error);
   })
}


const giveMoney = {"score":"score", "id":"id"};


start.innerHTML = randomWord;
btn.addEventListener('click', function(e) {
   e.preventDefault();
   // if (word.textContent[word.textContent.length - 1] == input.value[0]) {
      if (start.textContent[start.textContent.length - 1] == input.value[0]) {
         
       for(i in array){
         if(array[i]==input.value)
         {
            // Modal();
            
            alert('한번 사용한 단어는 사용하실 수 없습니다.');
            input.value = '';
            input.focus();
            return false;
         }
      }      
      alert('O');
      // word.textContent = input.value;
      start.textContent = input.value;
      array.push(input.value);
      list.innerHTML+=input.value + " -> ";
      input.value = '';
      score.innerHTML = array.length+1;
      lastScore = array.length + 1;
      input.focus();
      console.log(array);  
      score.innerHTML = array.length + '점';
   } 
   else {
      alert('X');
      input.value = '';
      input.focus();
   }
});
let modal = document.getElementById("gameover");

function Modal() {
   modal.style.display="block";
   axios({
      method: 'post',
      url: 'http://13.125.38.255:3000/game/rank/money',
      headers: { 
        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VySWQiLCJpYXQiOjE2MDUxODg3ODUsImV4cCI6MTYwNTI3NTE4NX0.PubknmKAuR0WYqCPz9viz3bs-Afl0XlPXeCiJiB1DaI' 
      },
      data :giveMoney
    })
   .then((response) => {
      console.log(response);
   })
   .catch((error) => {
      console.log(error);
   });

}
function noSpace(obj){
   let str_space = /\s/;
   if(str_space.exec(obj.value)){
      alert("공백을 사용하실 수 없습니다.");
      obj.focus();
      obj.value = obj.value.replace(' ', '');
      return false;
   }
}
let nav = document.querySelector('.nav-modal');
let navImg = document.querySelector('.nav-img');
let closeButton = document.getElementById('close');
let closeModal = document.getElementById('empty');

function toggleModal() {
   nav.classList.toggle("show-nav");
}
function navClick(event) {
   if(event.target === nav) {
      toggleModal();
   }
}
navImg.addEventListener("click", toggleModal);
//  closeButton.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);

let time = 10;
let sec= "";
let j = 0;
let x = setInterval(function() {
   sec = 10-j;
   document.getElementById("time").innerHTML = "시간 : " + sec + "초";
   j++; 
   if(j == 11){
   clearInterval(x);
   Modal();
   }
},1000);




