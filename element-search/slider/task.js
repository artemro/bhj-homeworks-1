const sliderList = Array.from(document.querySelectorAll(".slider__item"));
const dotList = Array.from(document.querySelectorAll(".slider__dot"));
const slideLeft = document.querySelector(".slider__arrow_prev");
const slideRight = document.querySelector(".slider__arrow_next");

var currentPicture = 1;
dotList[currentPicture - 1].classList.add("slider__dot_active");

function leftHndlr () {
    sliderList[currentPicture - 1].classList.remove("slider__item_active");
    dotList[currentPicture - 1].classList.remove("slider__dot_active");
    if (currentPicture == 1) {
        currentPicture = sliderList.length;
    } 
    else {
        currentPicture--;
    }
    sliderList[currentPicture - 1].classList.add("slider__item_active");
    dotList[currentPicture - 1].classList.add("slider__dot_active");
}

function rightHndlr () {
    sliderList[currentPicture - 1].classList.remove("slider__item_active");
    dotList[currentPicture - 1].classList.remove("slider__dot_active");
    if (currentPicture == sliderList.length) {
        currentPicture = 1;
    }
    else {
        currentPicture++;
    }
    sliderList[currentPicture - 1].classList.add("slider__item_active");
    dotList[currentPicture - 1].classList.add("slider__dot_active");
}

slideLeft.onclick = leftHndlr;
slideRight.onclick = rightHndlr;