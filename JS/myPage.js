axios({
  method : 'get',
  url : 'http://13.125.38.255:3000/user',
  headers:{
    "access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VySWQiLCJpYXQiOjE2MDUyNzU2NjAsImV4cCI6MzYwMDE2MDUyNzU2NjB9.M4il0CtNPjghIydNyZy-ghN89G__8exyVSxQtjOIm6g"
  }
})
.then((response)=>{
  console.log(response);
  const foodIndex = response.data.foods;
  
  for(let i = 0;i < foodIndex.length; i++){
    const foodCount = foodIndex[i].food;
    console.log(foodCount)
    let foodNumBox = document.getElementsByClassName('foodNumBox')[foodCount-1];
    foodNumBox.innerHTML = foodIndex[i].count;
  }
  const userInfo = response.data.user;
  let restMoney = document.getElementById('restMoney');
  restMoney.innerHTML = userInfo.money;
  let idBox = document.getElementById('idBox');
  idBox.innerHTML = userInfo.userId;
  let curCharacter = document.getElementById('currentCharacter');
  switch(userInfo.character){
    case 1:
      curCharacter.src = "../IMG/character/hedgehog.png";
      break;
    case 2:
      curCharacter.src = "../IMG/character/crow.png";
      break;
    case 3:
      curCharacter.src = "../IMG/character/crow.png";
      break;
    case 4:
      curCharacter.src = "../IMG/character/squirrel.png"
      break;
  }
  if(userInfo.weight <=30){
    curCharacter.classList.remove('default');
    curCharacter.classList.add('small');
    
  }
  else if(userInfo.weight <=60){
    curCharacter.classList.remove('small');
    curCharacter.classList.add('default');
  }
  else if(userInfo.weight <=80){
    curCharacter.classList.remove('default');
    curCharacter.classList.add('medium');
  }
  else if(userInfo.weight <=90){
    curCharacter.classList.remove('medium');
    curCharacter.classList.add('large');
  }
  else{
    curCharacter.classList.remove('large');
    curCharacter.classList.add('big');
  }
})
.catch((error)=>{
  console.log(error);
})

function changeCharacter(id) {
  axios({
    method : 'get',
    url : 'http://13.125.38.255:3000/food/' + id,
    headers:{
      "access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VySWQiLCJpYXQiOjE2MDUyNzU2NjAsImV4cCI6MzYwMDE2MDUyNzU2NjB9.M4il0CtNPjghIydNyZy-ghN89G__8exyVSxQtjOIm6g"
    }
  })
  .then((response)=>{
    console.log(response);
    location.reload();
  })
  .catch((error)=>{
    console.log(error);
    alert("음식을 먹을 수 없습니다.");
  })
}