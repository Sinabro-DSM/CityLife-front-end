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

let foodCountNumber = [0,0,0,0,0,0]; // 음식마다 갯수 세기
let foodSumPriceNumber = [0,0,0,0,0,0] // 음식 각각의 가격

let amountAll = 0, priceAll = 0; // 음식 총 갯수, 음식 총 가격

let sumAmount = document.getElementById('sumAmount'); // 음식 총 갯수 넣을 곳
let sumPrice = document.getElementById('sumPrice'); // 음식 총 가격 넣을 곳

let basketAmountDisplay = document.getElementById('basketAmountDisplay');
let cart = document.getElementById('cart');
let payment = document.getElementById('payment');

let cartList = document.getElementById('cartList');
let paymentList = document.getElementById('paymentList');

let cartFoodList = [
    document.getElementById('cartsnackList'),
    document.getElementById('cartsaladList'),
    document.getElementById('cartchickenbreastList'),
    document.getElementById('cartnoodlesList'),
    document.getElementById('cartkimbabList'),
    document.getElementById('cartcokeList')
]

let cartFoodCount = [
    document.getElementById('cartsnackCount'),
    document.getElementById('cartsaladCount'),
    document.getElementById('cartchickenbreastCount'),
    document.getElementById('cartnoodlesCount'),
    document.getElementById('cartkimbabCount'),
    document.getElementById('cartcokeCount')
]

let paymentFoodList = [
    document.getElementById('paymentsnackList'),
    document.getElementById('paymentsaladList'),
    document.getElementById('paymentchickenbreastList'),
    document.getElementById('paymentnoodlesList'),
    document.getElementById('paymentkimbabList'),
    document.getElementById('paymentcokeList')
] 

let paymentFoodCount = [
    document.getElementById('paymentsnackCount'),
    document.getElementById('paymentsaladCount'),
    document.getElementById('paymentchickenbreastCount'),
    document.getElementById('paymentnoodlesCount'),
    document.getElementById('paymentkimbabCount'),
    document.getElementById('paymentcokeCount')
]

let foodSumPrice = [ // 음식 각각에 가격 넣어줄 곳
    document.getElementById('snackSumPrice'),
    document.getElementById('saladSumPrice'),
    document.getElementById('chickenbreastSumPrice'),
    document.getElementById('noodlesSumPrice'),
    document.getElementById('kimbabSumPrice'),
    document.getElementById('cokeSumPrice')
]

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
}

function menuclick (foodPrice, number){ // 메뉴 클릭시 실행
    
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
    
}

function cartEmptyClick(){ // 장바구니 비우기 선택
    
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