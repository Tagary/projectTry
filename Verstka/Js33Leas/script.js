"use strict";
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);

// data atribut

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // нода просто некст с element/элемент

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text')    {
        continue;
    }

    console.log(node);
}