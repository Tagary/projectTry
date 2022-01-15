'use strict';   

//filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {     // Фильтрует
//     return name.length < 5;     
// });

// console.log(shortNames);

// map


// const answers = ['IvAn', 'Anna', 'Hello'];

// const result = answers.map(item => item.toLowerCase()); // взаимодействие с каждым элементом трансформирует

// console.log(result);

// every/some 

// const some = [4, 'qwq', 'sfreref'];

// console.log(some.some(item => typeof(item)==='number')); // хотя бы один элемент
// console.log(some.every(item => typeof(item)==='number')); // все элементы

// reduce

// const arr = [4, 5, 1, 3, 2, 6]; // числовой тип данных
//      sum = 0,   current 1 элемент массивка 4
//      sum = 4,   current 2 элемент массива 5          
// const res = arr.reduce((sum, current) => sum  + current); // если подставить после current, то будет принимать 1 параметром в sum
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}` );
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);
