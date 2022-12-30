const cookieImage = document.getElementById("cookie");
const cookieVelocity = document.getElementById("clicker__velocity"); 
const firstDate = new Date();

var counter = 0;

function clickHandler() {
    const cookieCounter = document.getElementById("clicker__counter");
    const currentDate = new Date();
    counter++;
    cookieVelocity.textContent = (currentDate - firstDate) / (1000 * counter); // в секундах
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
