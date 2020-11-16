
function noSpaceForm(obj) { // 공백사용못하게
    let str_space = /\s/;  // 공백체크
    if(str_space.exec(obj.value)) { //공백 체크
        alert("공백을 사용할수 없습니다.\n\n공백은 자동적으로 제거 됩니다.");
        obj.focus();
        obj.value = obj.value.replace(' ',''); // 공백제거
        return false;
    }
}

let loginButton = document.getElementsByClassName('loginAttempt')[0];
loginButton.addEventListener('click', () => {
    let loginId = document.getElementById('loginIdInput').value;
    let loginPw = document.getElementById('loginPasswordInput').value;
    console.log(loginId, loginPw);
    axios({
        url: 'http://13.125.38.255:3000' + '/user/login',
        method: 'post',
        data: {
            userId: loginId,
	        password: loginPw
        }
    }).then((res) => {
        console.log(res);
        switch (res.status){
            case 200: {
                console.log(res.data)
                alert("로그인에 성공하셨습니다!")
                localStorage.setItem("accessToken", res.data.accessToken);
                window.location.href = './../HTML/characterChoose.html';
                break;
            }
        }
    }).catch((err) => {
        alert('로그인에 실패했습니다. 다시 시도하세요!');    })
})