const foodList = [
    document.getElementById('snack'),
    document.getElementById('salad'),
    document.getElementById('chickenbreast'),
    document.getElementById('noodles'),
    document.getElementById('kimbab'),
    document.getElementById('softdrink')
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
let count= 0;
let basketAmountDisplay = document.getElementById('basketAmountDisplay');

function menumouseover (number){
    scanner[number].style.transform = "rotate(335deg)";
    price[number].style.display = "flex"; 
}

function menumouseout (number){
    scanner[number].style.transform = "rotate(0deg)";
    price[number].style.display = "none"; 
}

function menuclick (foodname, foodprice){
    console.log(foodname, foodprice);
    count++;
    if(count>0){
    basketAmountDisplay.style.display = "flex"; 
    }
    else{basketAmountDisplay.style.display = "none"; }
    console.log(count);
}

