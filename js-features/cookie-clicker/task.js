const cookieImage = document.getElementById("cookie");
const cookieVelocity = document.getElementById("clicker__velocity"); 
let firstDate = new Date();

var counter = 0;

function clickHandler() {
    const cookieCounter = document.getElementById("clicker__counter");
    let currentDate = new Date();
    counter++;
    cookieVelocity.textContent = 1000 / (currentDate - firstDate); // в секундах
    firstDate = currentDate;
    cookieCounter.textContent = counter;
    if (counter % 2 == 1) {
        cookieImage.width += 50;
        cookieImage.height += 50;
    }
    else {
        cookieImage.width -= 50;
        cookieImage.height -= 50;
    };
};

cookieImage.onclick = clickHandler;
