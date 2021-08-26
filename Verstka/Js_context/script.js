'use strict';

// Vizov function

// function showThis(a,b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a +  b;
//     }
//     console.log(sum())
// }

// showThis(4,5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };
// //                  surname
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }
// //      num             this
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обычная функция this = window, но если use strict undef
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - это новый экземплят обьекта
// 4) Ручная привязка this: call,apply,bind

const btn = document.querySelector('button');

// У стрелочной фукнции нет досупа this но вместо него e.target
//                              (e) =>
btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
    console.log(this);
});

// стрелочная функци может использовать обькт вызова this
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
        console.log(this);
    };

    say();
    }
    
};

obj.sayNumber();

const double = a =>  a *2;