


function noSpaceForm(obj) { // 공백사용못하게
    let str_space = /\s/;  // 공백체크
    if(str_space.exec(obj.value)) { //공백 체크
        alert("공백을 사용할수 없습니다.\n\n공백은 자동적으로 제거 됩니다.");
        obj.focus();
        obj.value = obj.value.replace(' ',''); // 공백제거
        return false;
    }
}

let signupButton = document.getElementsByClassName('signupAttempt')[0];
signupButton.addEventListener('click', () => {
    let signupId = document.getElementById('signupIdInput').value;
    let signupPw = document.getElementById('signupPasswordInput').value;
    console.log(signupId, signupPw);
    axios({
        url: 'http://13.125.38.255:3000' + '/user/signup',
        data: {
            userId: signupId,
	        password: signupPw
        },
        method: 'post'
    }).then((res) => {
        console.log(res.status);
        switch(res.status) {
            case 200: {
            alert("회원가입이 되셨습니다!")
            window.location.href = './../HTML/loginPage.html';
            break;
        }
     
        }
    }).catch((error) => {
        alert("이미 존재하는 아이디입니다.");   
    })
})