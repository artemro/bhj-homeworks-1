const arr = Array.from(document.querySelectorAll('.menu__item'));
const arrayLinks = Array.from(document.querySelectorAll('.menu__link'));
let countOpen = 0; // контроль количества открытых вложенных меню

function clickHandler(elem) {
    elem.onclick = function () {
        const currentItem = elem.closest('.menu__item');
        if (currentItem.closest('.menu_sub')) {
            return true; // при нажатии на опцию во вложенном меню, переходим по ссылке
        };
        let num = arr.indexOf(currentItem);
        num++;
        const newItem = arr[num]; // сдвиг в первый li вложенного меню
        if (newItem.closest('.menu_sub')) {
            if (countOpen == 0) { 
                newItem.closest('.menu_sub').classList.add('menu_active');
                countOpen += 1;
            }
            else {
                if (newItem.closest('.menu_sub').classList.contains('menu_active')) {
                    newItem.closest('.menu_sub').classList.remove('menu_active');
                    countOpen -= 1;
                }
            }
            return false;
        }
    };
}

arrayLinks.forEach((p) => {
    clickHandler(p);
})