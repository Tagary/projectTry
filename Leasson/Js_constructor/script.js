'use strict';

// ооп и создание новых обьектов
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
} 

// Создания прототипа
User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`)
} 

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();

console.log(ivan);
console.log(alex);

// Прототип классов почти как в c++ но далек еще где деструктор класса?

class User {
    constructor (name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`);
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел` );
    }
}