const arr = Array.from(document.querySelectorAll('.menu__item'));
const arrayLinks = Array.from(document.querySelectorAll('.menu__link'));
const subMenu = Array.from(document.querySelectorAll('.menu_sub'))
let countOpen = 0; // контроль количества открытых вложенных меню

function isMenuActive(elem) { // возвращает подменю ul, если у него класс menu_active
    if (elem.classList.contains('menu_active')) {
        countOpen++;
        return elem;
    }
}

function clickHandler(elem) {
    elem.onclick = function () {
        const currentItem = elem.closest('.menu__item'); // li над ссылкой
        if (currentItem.closest('.menu_sub')) {
            return true; // при нажатии на опцию во вложенном меню, переходим по ссылке
        };
        let num = arr.indexOf(currentItem);
        num++; 
        const newItem = arr[num]; // newItem содержит первый li вложенного меню
        countOpen = 0;
        subMenu.forEach((p) => { 
            isMenuActive(p);
        })
        if (countOpen == 0) { // если нет открытых меню, открываем 
            newItem.closest('.menu_sub').classList.add('menu_active');
        }
        else {
            if (newItem.closest('.menu_sub').classList.contains('menu_active')) {
                // если есть открытое меню, и мы кликнули по нему
                newItem.closest('.menu_sub').classList.remove('menu_active');
            } 
            else {
                // если есть открытое меню, но мы кликнули не по нему
                subMenu.forEach((p) => {
                    if (isMenuActive(p)) {
                        isMenuActive(p).classList.remove('menu_active');
                    }
                })
                newItem.closest('.menu_sub').classList.add('menu_active');
            }
        }
        return false;
    };
}

arrayLinks.forEach((p) => {
    clickHandler(p);
})