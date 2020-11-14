const scanner = [
    document.getElementById('scanner1'),
    document.getElementById('scanner2'),
    document.getElementById('scanner3'),
    document.getElementById('scanner4'),
    document.getElementById('scanner5'),
    document.getElementById('scanner6')
]
const price = [
    document.getElementById('price1'),
    document.getElementById('price2'),
    document.getElementById('price3'),
    document.getElementById('price4'),
    document.getElementById('price5'),
    document.getElementById('price6')
]

let paymentResult = document.getElementById('paymentResult'); 

let foodCountNumber = [0,0,0,0,0,0]; 
let foodSumPriceNumber = [0,0,0,0,0,0] 

let amountAll = 0, priceAll = 0; 

let sumAmount = document.getElementById('sumAmount'); 
let sumPrice = document.getElementById('sumPrice'); 

let basketAmountDisplay = document.getElementById('basketAmountDisplay');
let cart = document.getElementById('cart');
let payment = document.getElementById('payment');

let cartList = document.getElementById('cartList');
let paymentList = document.getElementById('paymentList');

let cartFoodList = [
    document.getElementById('cartsnackList'),
    document.getElementById('cartnoodlesList'),
    document.getElementById('cartkimbabList'),
    document.getElementById('cartcokeList'),
    document.getElementById('cartsaladList'),
    document.getElementById('cartchickenbreastList')
]

let cartFoodCount = [
    document.getElementById('cartsnackCount'),
    document.getElementById('cartnoodlesCount'),
    document.getElementById('cartkimbabCount'),
    document.getElementById('cartcokeCount'),
    document.getElementById('cartsaladCount'),
    document.getElementById('cartchickenbreastCount')
]

let paymentFoodList = [
    document.getElementById('paymentsnackList'),
    document.getElementById('paymentnoodlesList'),
    document.getElementById('paymentkimbabList'),
    document.getElementById('paymentcokeList'),
    document.getElementById('paymentsaladList'),
    document.getElementById('paymentchickenbreastList')
] 

let paymentFoodCount = [
    document.getElementById('paymentsnackCount'),
    document.getElementById('paymentnoodlesCount'),
    document.getElementById('paymentkimbabCount'),
    document.getElementById('paymentcokeCount'),
    document.getElementById('paymentsaladCount'),
    document.getElementById('paymentchickenbreastCount')
]

let foodSumPrice = [ 
    document.getElementById('snackSumPrice'),
    document.getElementById('noodlesSumPrice'),
    document.getElementById('kimbabSumPrice'),
    document.getElementById('cokeSumPrice'),
    document.getElementById('saladSumPrice'),
    document.getElementById('chickenbreastSumPrice')
]

let foodId = []

const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VySWQiLCJpYXQiOjE2MDUyNzU2NjAsImV4cCI6MzYwMDE2MDUyNzU2NjB9.M4il0CtNPjghIydNyZy-ghN89G__8exyVSxQtjOIm6g';

function menumouseover (number){
    scanner[number].style.transform = "rotate(335deg)";
    price[number].style.display = "flex"; 
}
function menumouseout (number){
    scanner[number].style.transform = "rotate(0deg)";
    price[number].style.display = "none"; 
}

function cartClick(type){
   cart.style.display = type;
}

function paymentButtonClick(type){
    payment.style.display = type;

    if(type == 'block'){
        axios({
            url: 'http://13.125.38.255:3000' + '/food',
            method: 'post',
            data: {
                "foodid": foodId,
                "foodmoney": priceAll
            },
            headers:{
                'access-token': header
            }
        }).then((res) => {
            console.log(res);
            switch (res.status){
                case 200:{
                    paymentResult.innerText = '결제 완료';
                    break;
                    
                }
            }
        }).catch((error) => {
            paymentResult.innerText = '잔액이 부족합니다.';
        })
    }
    else if(type == 'none'){
        cartEmptyClick();
        window.location.reload();
    }
}

function menuclick (foodPrice, number){ 
    amountAll++;
    document.getElementById("basketAmount").innerText=amountAll; 
    basketAmountDisplay.style.display = "flex"; 

    foodCountNumber[number]++;
    if(foodCountNumber[number]==1){ 
        cartFoodList[number].style.display = "flex";
        paymentFoodList[number].style.display = "flex";
    }
    cartFoodCount[number].innerText = foodCountNumber[number];
    paymentFoodCount[number].innerText = foodCountNumber[number];
    foodSumPriceNumber[number] = foodPrice*foodCountNumber[number];
    foodSumPrice[number].innerText = foodSumPriceNumber[number];
    
    sumAmount.innerText = amountAll;
    
    priceAll = foodSumPriceNumber[0]+foodSumPriceNumber[1]+foodSumPriceNumber[2]+foodSumPriceNumber[3]+foodSumPriceNumber[4]+foodSumPriceNumber[5];
    console.log(priceAll)
    sumPrice.innerText = priceAll;

    switch (number){
        case 0:{
            foodId[0] = 1;
            break; 
        }
        case 1:{
            foodId[1] = 2;
            break; 
        }
        case 2:{
            foodId[2] = 3;
            break; 
        }
        case 3:{
            foodId[3] = 4;
            break; 
        }
        case 4:{
            foodId[4] = 5;
            break; 
        }
        case 5:{
            foodId[5] = 6;
            break; 
        }
    }
    console.log(foodId)
    
}

function cartEmptyClick(){ 
    
    for(let i=0; i<6; i++){
        cartFoodList[i].style.display = "none"
        paymentFoodList[i].style.display = "none"
        foodCountNumber[i] = 0;
        foodSumPriceNumber[i] = 0;
    }
    
    amountAll = 0, priceAll = 0;
    
    document.getElementById("basketAmount").innerText=amountAll;
    basketAmountDisplay.style.display = "none";

    sumAmount.innerText = amountAll;
    sumPrice.innerText = priceAll;

    console.log(priceAll);
}