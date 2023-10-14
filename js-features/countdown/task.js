const timerText = function(){
    const seconds = document.getElementById("timer");
    const extendedTimer = document.getElementById("extended__timer")
    let timer = new Date (seconds.textContent * 1000).toLocaleTimeString().slice(6);
    seconds.textContent -= 1;
    timer -= 1;
    extendedTimer.textContent = "00:00:" + timer;
    if (seconds.textContent == 0) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
    }
}

const intervalId = setInterval(timerText, 1000);
