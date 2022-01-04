const plyrbtns = Array.from(document.querySelectorAll(".plyrbtn"));
const cellNumbers = Array.from(document.querySelectorAll("[data-cell]"));
const messagehead = document.getElementById("messagehead");
const judgement = document.getElementById("judgement");
const overlay = document.getElementById("overlay");
const replaybtn = document.getElementById("replaybtn");
let currentPlayer
let chosenPlayer
let tries
plyrbtns.forEach(choosePlayer);
cellNumbers.forEach(fillCell)


function choosePlayer(plyrbtn, key){
    plyrbtn.addEventListener("click", function(){
        chosenPlayer = key;
        overlay.style.display="none";
        tries = 9;
    }) 
}

function fillCell(cellNumber){
    cellNumber.addEventListener("click", function() {
        currentPlayer = plyrbtns[chosenPlayer].innerText;
        if(cellNumber.innerText === ""){
            cellNumber.innerText = currentPlayer;
            tries--
        }
        plyrbtns.reverse();
        if(checkWin(currentPlayer)){
            judgement.style.display = "grid";
            messagehead.innerText = currentPlayer + " is the winner!"; 
        }
        if(tries == 0){
            judgement.style.display = "grid";
            messagehead.innerText = "Draw!"; 
        }
    })
}

const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function checkWin(player){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellNumbers[index].innerText.includes(player);
        })
    })
}

replaybtn.addEventListener("click", function(){
    tries = 9;
    judgement.style.display= "none";
    overlay.style.display= "grid";
    cellNumbers.forEach(emptyCell);
});

function emptyCell(emptied){
    emptied.innerText = " ";
}





