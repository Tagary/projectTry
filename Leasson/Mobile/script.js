"use strict";

// touchstart при касании
// touchmove при касании двигается
// touchend при конце касания
// touch enter при наскальзывание элемента то срабатывает
// touchleave при выходе за переделы элемента
// touchcancel при выходе из бразуера 

window.addEventListener ('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });

});

// touches список всех пальцев
// targetTouches 
// changedTouches Список пальцев которые участвуют в текущем событии