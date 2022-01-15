"use strict";

const str = "test";
const arr = [1,2,4];

// console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";  

console.log(fruit.indexOf("fruit")); //Метод поиска начала индекса с какого значения, если не будет символа то выдаст -1

const logg="Hello world";

console.log(logg.slice(6, 11)); //Метод обрезания строки если отрицательные, то начинается справа тоесть в ворлд -6,-1
// но обрезается 1 символ
console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5)); //Сколько символов нужно вырезать

const num = 12.2;

console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test)); // превращает строку в число без плавающей точке
console.log(parseFloat(test)); 
