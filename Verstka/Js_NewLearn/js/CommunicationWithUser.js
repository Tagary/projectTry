"use strict";

//Все команды тестируются только в браузере

// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

//Вся информация от пользователя это строка

const answer = prompt("Вам есть 18?", "18");    
console.log(typeof(answer));            

const answers=[];

answers[0]=prompt("Как ваше имя?", "");
answers[1]=prompt("Как ваше фамилия?", "");
answers[2]=prompt("сколько вам лет?", "");

console.log(typeof(answers));
console.log(typeof(null)); //ОШбика всемирная классификация делает его обьектом, но по факту это null