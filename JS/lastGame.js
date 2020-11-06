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
let rank = document.getElementById('rank');
let ranking = [];

start.innerHTML = randomWord;
btn.addEventListener('click', function(e) {
   e.preventDefault();
   // if (word.textContent[word.textContent.length - 1] == input.value[0]) {
      if (start.textContent[start.textContent.length - 1] == input.value[0]) {
<<<<<<< HEAD
         for(i in array){
         if(array[i]==input.value)
         {
=======
         score.innerHTML = array.length+1 + '점';
         rank = array.length + 1;
         ranking.push(rank);
         console.log(ranking.length);
       for(i in array){
         if(array[i]==input.value)
         {
            // Modal();
            
>>>>>>> develop
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
   // function preventEnter() {
   //    if(window.event.keycode == 13) {
   //       window.event.keycode = 0;
   //    }
   // }
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
<<<<<<< HEAD

},1000);

=======

},1000);
>>>>>>> develop


