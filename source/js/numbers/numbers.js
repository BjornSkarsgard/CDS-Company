'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const li = document.querySelectorAll('.block__item');
    var number = document.querySelector('#number__block');
    var sum = 0;

    function getCheckedCheckBoxes() {
        var selectedCheckBoxes = document.querySelectorAll('.block__item input:checked');

        var checkedValues = Array.from(selectedCheckBoxes).map(cb => cb.value);

        sum = 0;
        for (let i = 0; i < checkedValues.length; i++) {
            let num = parseInt(checkedValues[i]);
            sum += num;
        }

        number.value = sum;
        console.log(sum);

    }

    li.forEach(node => node.addEventListener('click', function() {
        getCheckedCheckBoxes()

    }))


    const btn = document.querySelector('#btn__clear');
    btn.addEventListener('click', function() {
        const checkbox = document.querySelectorAll('.block__item input');
        checkbox.forEach(input => {
            input.checked = false;
        });
        getCheckedCheckBoxes()
    })




})