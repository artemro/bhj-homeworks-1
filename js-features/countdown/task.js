const timerText = function(){
    const seconds = document.getElementById("timer");
    seconds.textContent -= 1;
    if (seconds.textContent == 0) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
    }
}

const intervalId = setInterval(timerText, 1000);
