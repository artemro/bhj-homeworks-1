const sliderList = Array.from(document.querySelectorAll(".slider__item"));
const dotList = Array.from(document.querySelectorAll(".slider__dot"));
const slideLeft = document.querySelector(".slider__arrow_prev");
const slideRight = document.querySelector(".slider__arrow_next");

let currentPicture = 1;
let nextPicture = 1;

dotList[currentPicture - 1].classList.add("slider__dot_active");

function curPicSet () { // устанавливаем значение, соответствующее текущей картинке
    sliderList.forEach ((elem) => {
        if (elem.classList.contains("slider__item_active")) {
            currentPicture = sliderList.indexOf(elem) + 1;
        }
    })
}

function showPicture (index) { 
    dotList[currentPicture - 1].classList.remove("slider__dot_active");
    sliderList[currentPicture - 1].classList.remove("slider__item_active");
    dotList[index - 1].classList.add("slider__dot_active");
    sliderList[index - 1].classList.add("slider__item_active");
}

dotList.forEach ((p) => {
    p.onclick = function () {
        curPicSet();
        nextPicture = dotList.indexOf(p) + 1;
        showPicture(nextPicture);
    };
})

slideLeft.onclick = function() {
    curPicSet();
    if (currentPicture != 1 ) {
        nextPicture -= 1;
    } 
    else {
        nextPicture = sliderList.length;
    }
    showPicture(nextPicture);
}

slideRight.onclick = function() {
    curPicSet();
    if (currentPicture != sliderList.length) {
        nextPicture += 1;
    } 
    else {
        nextPicture = 1;
    }
    showPicture(nextPicture);
}
