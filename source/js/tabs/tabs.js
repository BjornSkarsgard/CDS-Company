'use strict'

window.addEventListener('DOMContentLoaded', () => {

    const label = document.querySelectorAll('.content__text');
    const radio = document.querySelectorAll('.content__radio');
    const titles = document.querySelector('.content__titles');


    const color = event => {
        const target = event.target;
        for (let i = 0; i < radio.length; i++) {
            label[i].classList.remove('content__text--active');
        }
        target.closest('label').classList.toggle('content__text--active');
    }


    titles.addEventListener('click', color);


})