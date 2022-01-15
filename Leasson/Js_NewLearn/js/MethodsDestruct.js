"use strict";


const options = {
    name: "test",
    with:1024,
    height:1024,
    colors: {
        border:'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors; //Деструктиризация лучше чем более нижняя console.log(options["colors"]["border"]);
console.log(border);

// console.log(Object.keys(options).length); //Лучше чем циклы которые были

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);

let counter=0;
for (let key in options) {
    if (typeof(options[key])=='object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
      counter++;
    }
}
console.log(counter);
