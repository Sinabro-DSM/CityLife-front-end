const foodList = [
    document.getElementById('snack'),
    document.getElementById('salad'),
    document.getElementById('chickenbreast'),
    document.getElementById('noodles'),
    document.getElementById('kimbab'),
    document.getElementById('coke')
]
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

let snackCountNumber=0, saladCountNumber=0, chickenbreastCountNumber=0, noodlesCountNumber=0, kimbabCountNumber=0, cokeCountNumber=0;   
let count = 0;
let basketAmountDisplay = document.getElementById('basketAmountDisplay');
let cart = document.getElementById('cart');
let payment = document.getElementById('payment');
let shoppingCartLartList = document.getElementById('shoppingCartList')

let cartList = document.getElementById('cartList');
    
let cartsnackList = document.getElementById('cartsnackList');
let cartsaladList = document.getElementById('cartsaladList');
let cartchickenbreastList = document.getElementById('cartchickenbreastList');
let cartnoodlesList = document.getElementById('cartnoodlesList');
let cartkimbabList = document.getElementById('cartkimbabList');
let cartcokeList = document.getElementById('cartcokeList');

let cartsnackCount = document.getElementById('cartsnackCount');
let cartsaladCount = document.getElementById('cartsaladCount');
let cartchickenbreastCount = document.getElementById('cartchickenbreastCount');
let cartnoodlesCount = document.getElementById('cartnoodlesCount');
let cartkimbabCount = document.getElementById('cartkimbabCount');
let cartcokeCount = document.getElementById('cartcokeCount');

let paymentList = document.getElementById('paymentList');
    
let paymentsnackList = document.getElementById('paymentsnackList');
let paymentsaladList = document.getElementById('paymentsaladList');
let paymentchickenbreastList = document.getElementById('paymentchickenbreastList');
let paymentnoodlesList = document.getElementById('paymentnoodlesList');
let paymentkimbabList = document.getElementById('paymentkimbabList');
let paymentcokeList = document.getElementById('paymentcokeList');

let paymentsnackCount = document.getElementById('paymentsnackCount');
let paymentsaladCount = document.getElementById('paymentsaladCount');
let paymentchickenbreastCount = document.getElementById('paymentchickenbreastCount');
let paymentnoodlesCount = document.getElementById('paymentnoodlesCount');
let paymentkimbabCount = document.getElementById('paymentkimbabCount');
let paymentcokeCount = document.getElementById('paymentcokeCount');

let snackSumPrice = document.getElementById('snackSumPrice');
let saladSumPrice = document.getElementById('saladSumPrice');
let chickenbreastSumPrice = document.getElementById('chickenbreastSumPrice');
let noodlesSumPrice = document.getElementById('noodlesSumPrice');
let kimbabSumPrice = document.getElementById('kimbabSumPrice');
let cokeSumPrice = document.getElementById('cokeSumPrice');

let snackSumPriceNum=0, saladSumPriceNum=0, chickenbreastSumPriceNum=0, noodlesSumPriceNum=0, kimbabSumPriceNum=0, cokeSumPriceNum=0;

let sumAmount = document.getElementById('sumAmount');
let sumPriceAll = document.getElementById('sumPriceAll');

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

function menuclick (foodName, foodPrice){
    console.log(foodName, foodPrice);
    count++;
    document.getElementById("basketAmount").innerText=count; // 장바구니 위에 카운트수 증가
    basketAmountDisplay.style.display = "flex"; 
    if(foodName == '과자'){
        snackCountNumber++;
        console.log(snackCountNumber);
        if(snackCountNumber==1){ 
            cartsnackList.style.display = "flex";
            paymentsnackList.style.display = "flex";
        }
        cartsnackCount.innerText = snackCountNumber;
        paymentsnackCount.innerText = snackCountNumber;
        snackSumPriceNum = foodPrice*snackCountNumber;
        snackSumPrice.innerText = snackSumPriceNum;
        console.log(snackSumPriceNum);
    }
    else if(foodName == '샐러드'){
        saladCountNumber++;
        console.log(saladCountNumber);
        if(saladCountNumber==1){ 
            cartsaladList.style.display = "flex";
            paymentsaladList.style.display = "flex";
        }
        cartsaladCount.innerText = saladCountNumber;
        paymentsaladCount.innerText = saladCountNumber;
        saladSumPriceNum = foodPrice*saladCountNumber;
        saladSumPrice.innerText = saladSumPriceNum;
        console.log(saladSumPriceNum);
    }
    else if(foodName == '닭가슴살'){
        chickenbreastCountNumber++;
        console.log(chickenbreastCountNumber);
        if(chickenbreastCountNumber==1){ 
            cartchickenbreastList.style.display = "flex";
            paymentchickenbreastList.style.display = "flex";
        }
        cartchickenbreastCount.innerText = chickenbreastCountNumber;
        paymentchickenbreastCount.innerText = chickenbreastCountNumber;
        chickenbreastSumPriceNum = foodPrice*chickenbreastCountNumber;
        chickenbreastSumPrice.innerText = chickenbreastSumPriceNum;
        console.log(chickenbreastSumPriceNum);
    }
    else if(foodName == '라면'){
        noodlesCountNumber++;
        console.log(noodlesCountNumber);
        if(noodlesCountNumber==1){ 
            cartnoodlesList.style.display = "flex";
            paymentnoodlesList.style.display = "flex";
        }
        cartnoodlesCount.innerText = noodlesCountNumber;
        paymentnoodlesCount.innerText = noodlesCountNumber;
        noodlesSumPriceNum = foodPrice*noodlesCountNumber;
        noodlesSumPrice.innerText = noodlesSumPriceNum;
        console.log(noodlesSumPriceNum);
    }
    else if(foodName == '삼각김밥'){
        kimbabCountNumber++;
        console.log(kimbabCountNumber);
        if(kimbabCountNumber==1){ 
            cartkimbabList.style.display = "flex";
            paymentkimbabList.style.display = "flex";
        }
        cartkimbabCount.innerText = kimbabCountNumber;
        paymentkimbabCount.innerText = kimbabCountNumber;
        kimbabSumPriceNum = foodPrice*kimbabCountNumber;
        kimbabSumPrice.innerText = kimbabSumPriceNum;
        console.log(kimbabSumPriceNum);
    }
    else if(foodName == '콜라'){
        cokeCountNumber++;
        console.log(cokeCountNumber);
        if(cokeCountNumber==1){ 
            cartcokeList.style.display = "flex";
            paymentcokeList.style.display = "flex";
        }
        cartcokeCount.innerText = cokeCountNumber;
        paymentcokeCount.innerText = cokeCountNumber;
        cokeSumPriceNum = foodPrice*cokeCountNumber;
        cokeSumPrice.innerText = cokeSumPriceNum;
        console.log(cokeSumPriceNum);
    }
    sumAmount.innerText = count;
    sumPriceAll.innerText = snackSumPriceNum+saladSumPriceNum+chickenbreastSumPriceNum+noodlesSumPriceNum+kimbabSumPriceNum+cokeSumPriceNum;
}

function cartEmptyClick(){ //장바구니 비우기 버튼 누를 경우 장바구니와 영수증 모두 삭제
    count = 0, snackCountNumber=0, saladCountNumber=0, chickenbreastCountNumber=0, noodlesCountNumber=0, kimbabCountNumber=0, cokeCountNumber=0;
    document.getElementById("basketAmount").innerText=count;
    basketAmountDisplay.style.display = "none";
    basketAmountDisplay.style.display = "none";
    cartsnackList.style.display = "none";
    paymentsnackList.style.display = "none";
    cartsaladList.style.display = "none";
    paymentsaladList.style.display = "none";
    cartchickenbreastList.style.display = "none";
    paymentchickenbreastList.style.display = "none";
    cartnoodlesList.style.display = "none";
    paymentnoodlesList.style.display = "none";
    cartkimbabList.style.display = "none";
    paymentkimbabList.style.display = "none";
    cartcokeList.style.display = "none";
    paymentcokeList.style.display = "none";
    sumAmount.innerText = 0;
    sumPriceAll.innerText = 0;
}