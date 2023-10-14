const dropdownButton = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownValue = document.querySelector('.dropdown__value');

function clickHandler () {
    dropdownList.classList.add('dropdown__list_active');
}

dropdownButton.addEventListener("click", clickHandler)

dropdownItems.forEach((p) => {
    p.onclick = function () {
        console.log(dropdownValue);
        dropdownValue.textContent = p.textContent;
        console.log(dropdownList);
        dropdownList.classList.remove('dropdown__list_active');
        return false;
    };
})
