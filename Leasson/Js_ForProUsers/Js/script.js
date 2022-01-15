'use strict';

const person = {
    name: 'alex',
    tel: '+744444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
//          Парсит обратно в обьект
const clone = JSON.parse(JSON.stringify(person));

clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);

import { one, two } from "../es6Module";