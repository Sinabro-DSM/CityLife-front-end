let char = document.getElementById('char');
let i = 1;
let j = 0;
char.style.transition = "0s";
let charVal = 1;



$(document).keydown(function(event) {
    if (event.keyCode == '37') {
/*         charVal = 2; */
        if(char.style.marginLeft.split("px")[0]==0){
            return;
        }else{ // 끝에서 멈추게
        char.style.marginLeft = (i-1)*70 + "px";
        }
        i--;
    } // 왼쪽으로 움직이기
    else if (event.keyCode == '39') {

        if(char.style.marginLeft.split("px")[0]>=3290){
            return;
        }else{
            char.style.marginLeft = i*70 + "px";
        }
        i++;
    } // 오른쪽으로 움직이기
    else if (event.keyCode == '32'){
        char.style.transition = "0.4s";
        char.style.marginBottom = "100px";
        setTimeout(function() {
            char.style.marginBottom = "0px";
            char.style.transition = "0s";
          }, 500);
    } // 점프기능

  }); // 캐릭터 움직이는 거 구현 */

   let val = true;
  let alertVal = document.getElementById('alert'); 
  let arrow = document.getElementById('arrow');
  let alertVal2 = document.getElementById('alert2'); 
  let arrow2 = document.getElementById('arrow2');
  let alertVal3 = document.getElementById('alert3'); 
  let arrow3 = document.getElementById('arrow3');
  let alertVal4 = document.getElementById('alert4'); 
  let arrow4 = document.getElementById('arrow4');
  let alertVal5 = document.getElementById('alert5'); 
  let arrow5 = document.getElementById('arrow5');
  window.onload = function(){
    axios({
        url:'http://13.125.38.255:3000/user/character',
        method: 'get',
        headers:{
          "access-token": localStorage.getItem('accessToken')
        }
    }).then((res)=>{
        console.log(res);
        let charVal = res.data;
        console.log(charVal.character)
        switch (charVal.character) {
            case 1:
                char.src = "./../IMG/character/hedgehog.png"
                break;
            case 2:
                char.src = "./../IMG/character/raccoon.png"
                break;
            case 3:
                char.src = "./../IMG/character/crow.png"
                break;
            case 4:
                char.src = "./../IMG/character/squirrel.png"
                break;
        }
        if(charVal.weight <=30){
            char.className="small"
          }
          else if(charVal.weight <=60){
            char.className="default"
          }
          else if(charVal.weight <=80){
            char.className="medium"
          }
          else if(charVal.weight <=90){
            char.className="large"
          }
          else{
            char.className="big"
          }
        
    }).catch((res)=>{
        console.log(res)
    })
      setInterval(() => {
        console.log(char.style.marginLeft)
        if(char.style.marginLeft == '700px'){
            alertVal.style.display = "flex";
            arrow.style.display = 'block';
            $(document).keydown(function(event) {
                if(event.keyCode == '38'){
                    location.href = "./../HTML/conveniencePage.html";
                    val = !val;
                }
              }); // 캐릭터 움직이는 거 구현 
        }        
        else{
            alertVal.style.display = "none";
            arrow.style.display = 'none';
        }
        if(char.style.marginLeft == '1120px'){
            alertVal5.style.display = "flex";
            arrow5.style.display = 'block'
             $(document).keydown(function(event) {
                if(event.keyCode == '38'){
                    location.href = "./../HTML/lottoShop.html";
                }
              }); // 캐릭터 움직이는 거 구현 
        }        
        else{
            alertVal5.style.display = "none";
            arrow5.style.display = 'none'
        }
        if(char.style.marginLeft == '1470px'){
            alertVal4.style.display = "flex";
            arrow4.style.display = 'block'
             $(document).keydown(function(event) {
                if(event.keyCode == '38'){
                    location.href = "./../HTML/mainMenu.html";
                }
              }); // 캐릭터 움직이는 거 구현 
        }        
        else{
            alertVal4.style.display = "none";
            arrow4.style.display = 'none'
        }
        if(char.style.marginLeft == '1960px'){
            alertVal2.style.display = "flex";
            arrow2.style.display = 'block'
             $(document).keydown(function(event) {
                if(event.keyCode == '38'){
                    location.href = "./../HTML/artGallery.html";
                }
              }); // 캐릭터 움직이는 거 구현 
        }        
        else{
            alertVal2.style.display = "none";
            arrow2.style.display = 'none'
        }
        if(char.style.marginLeft == '3080px'){
            alertVal3.style.display = "flex";
            arrow3.style.display = 'block'
             $(document).keydown(function(event) {
                if(event.keyCode == '38'){
                    location.href = "./../HTML/loginPage.html";
                    localStorage.removeItem("accessToken");
                }
              }); // 캐릭터 움직이는 거 구현 
        }        
        else{
            alertVal3.style.display = "none";
            arrow3.style.display = 'none'
        }
      }, 1);
  }
