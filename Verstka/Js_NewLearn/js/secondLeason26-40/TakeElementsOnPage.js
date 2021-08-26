"use strict";

const box = document.getElementById('box');

const btns = document.getElementsByTagName("button")[1];// обращается ко всем элементам данного тега тоесть кнопки [] какая?

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
console.log(item);
});

const oneheart = document.querySelector('.heart');

console.log(oneheart);