"use strict";

if (4 == 4) {
    console.log("ok!");
}else{
    console.log("Error");
}

const num=50;

if (num<49){
    console.log("error");
}else if (num>100){
    console.log("Mnogo");
}else {
    console.log("ok!");
}

// (num === 50) ? console.log("ok!") : console.log("error");



switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log("Неверное");
        break;
    case 50:
        console.log("В точку!");
        break;
    default:
        console.log('Не сейчас');
        break;
}