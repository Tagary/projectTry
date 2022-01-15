'use strict';

// Концепция
class Rectangle {
    // помещаемые значения
    constructor(height, width) {
        this.height = height;
        this.width = width;

    }

    // метод
    calcArea() {
        return this.height * this.width;    
    }
}

// Наследование
class ColoredRectagleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width); // Всегда первая строка
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log (`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}


const div = new ColoredRectagleWithText(25,10,'hello World', 'red');
div.showMyProps();
console.log(div.calcArea());

// Экземпляр
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());