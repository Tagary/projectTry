"use strict";

let x=5; alert(x++); //increment postfix 5
// [] пустой массив это строка при канкатанации
console.log(typeof([]+false-null+true));// number without typeoff NaN

let y=1; 
let x=y=2;
console.log(x); //2
alert(x);

console.log([]+1+2); //"12"

alert("1"[0]);

console.log(2 && 1 && null && 0 && undefined); //null
// И запинается на лжи
// ИЛИ запинается на правде

console.log(!!(1&&2) === (1&&2)); //!! восклицательных знака true
//          3     3    3 результаты 
alert(null || 2 && 3 || 4);

const a = [1,2,3];
const b = [1,2,3]; 

console.log(a==b);

alert(+"Infinity"); // Infinity

console.log ("Ёжик"> "яблоко"); // False unikode

console.log(0 || "" || 2 || undefined || true || false);
