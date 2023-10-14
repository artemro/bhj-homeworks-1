var counterWin = 0;
var counterLose = 0;

const wins = document.getElementById("dead");
const loses = document.getElementById("lost");

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (getHole(i).classList.contains( 'hole_has-mole' )) {
            counterWin += 1;
            wins.textContent = counterWin;
        }
        else {
            counterLose += 1; 
            loses.textContent = counterLose;
        };
        if (counterWin == 10 | counterLose == 5) {
            if (counterWin == 10) {
                wins.textContent = counterWin;
                alert("Победа!");
            }
            else {
                loses.textContent = counterLose;
                alert("Вы проиграли!");
            };
            counterWin = 0;
            counterLose = 0;
            wins.textContent = counterWin;
            loses.textContent = counterLose;
        };
    }
}
