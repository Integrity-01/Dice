let player1Point = document.getElementById("player1Point");
let player2Point = document.getElementById("player2Point");

function player1Roll () {
const dice1 = (Math.floor(Math.random() * 6) + 1);
player1Point.innerText = dice1
}


function player2Roll () {
    const dice2 = (Math.floor(Math.random() * 6) + 1);
    player2Point.innerText = dice2
}

function newGame() {
    player1Point.innerText = 0
    player2Point.innerText = 0
}
function check() {
    if (player1Point.innerText > player2Point.innerText) {
        alert("Player 1 Won");
        newGame();

    } else if (player1Point.innerText < player2Point.innerText) {
        alert("Player 2 Won");
        newGame();
    } else { 
        alert("Match Draw");
        newGame();
    }
}

