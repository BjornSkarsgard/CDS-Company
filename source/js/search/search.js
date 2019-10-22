'use strict';


//все блоки со списками
var blockItems = document.querySelectorAll('.block__items');
var cards0 = blockItems[0].querySelectorAll('.block__item');
var cards1 = blockItems[1].querySelectorAll('.block__item');
var cards2 = blockItems[2].querySelectorAll('.block__item');
var cards3 = blockItems[3].querySelectorAll('.block__item');
//все поля ввода
var input0 = document.querySelector('#site__search_0');
var input1 = document.querySelector('#site__search_1');
var input2 = document.querySelector('#site__search_2');
var input3 = document.querySelector('#site__search_3');




function filter(cards, text) {
    text.addEventListener('keyup', evt => {
        cards.forEach(
            function getMatch(info) {
                let inpup = text.value.toUpperCase();

                let heading = info.querySelector('.block__name');
                let headingContent = heading.innerHTML.toUpperCase();

                if (headingContent.includes(inpup)) {
                    info.classList.add('show');
                    info.classList.remove('hide');
                    console.log('проверка1');

                } else {
                    info.classList.add('hide');
                    info.classList.remove('show');
                    console.log('проверка2');
                }
            }
        )
    })
}



filter(cards0, input0);
filter(cards1, input1);
filter(cards2, input2);
filter(cards3, input3);