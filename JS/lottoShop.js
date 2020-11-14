var generateRandom = function (min, max) {
    var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
    return ranNum;
  } 

 let random =  generateRandom(0,1500);
 window.onload = function(){
     if(random%10 != 0){
         let temp = Math.round(random/100)
         random = temp * 100
     }
 }


function entrance(){    
    const money = {
        money : random
    };

    axios({
        url: 'http://13.125.38.255:3000/lotto',
        method: 'post',
        data: {
            money : random
        },
        headers : { "access-token": localStorage.getItem('accessToken')},
    }).then(response => {
        func();
    }).catch(response => {
        alert("잔액부족");
        console.log(response);
        console.log(random)
    });


    function func(){
        let page = document.getElementById('page');
        let page2 = document.getElementById('page2');
        let price = document.getElementById('price');
        price.innerHTML = random + '원'
        page.style.opacity = "0";
        setTimeout(function(){
            page.style.display = "none";
            page2.style.display = "flex";
            setTimeout(function(){
                page2.style.transition = "1s"
                page2.style.opacity = "1"
            },100) // 페이지2 생성
        },800)
        let boxCover = document.getElementById('boxCover')
        let main = document.getElementById('main')
        setTimeout(function(){
            boxCover.style.transition = "6s"
            boxCover.style.opacity = "0" // 복권 당첨금 서서히 보이게
            setTimeout(function(){
                main.style.display = "block"; // 메인버튼 나오게
            },3500)
        },2000)
    }
}

