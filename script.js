const plyrbtns = Array.from(document.querySelectorAll(".plyrbtn"));
const cellNumbers = Array.from(document.querySelectorAll("[data-cell]"));
const messagehead = document.getElementById("messagehead");
const judgement = document.getElementById("judgement");
const overlay = document.getElementById("overlay");
const replaybtn = document.getElementById("replaybtn");
let currentPlayer
let chosenPlayer
let tries = 9;
plyrbtns.forEach(choosePlayer);
cellNumbers.forEach(fillCell)

////Final Function. Make the replay button bring the players back. Set tries back to nine and empty the squares

replaybtn.addEventListener("click", function(){
    tries = 9;
    for(let i=0; i<=cellNumbers.length; i++){
        cellNumbers[i].innerText = null;
    }
    overlay.style.display= "grid";
})
function choosePlayer(plyrbtn, key){
    plyrbtn.addEventListener("click", function(){
        chosenPlayer = key;
        overlay.style.display="none";
    }) 
}


function fillCell(cellNumber){
    cellNumber.addEventListener("click", function() {
        currentPlayer = plyrbtns[chosenPlayer].innerText;
        cellNumber.innerText = currentPlayer;
        tries--
        plyrbtns.reverse();
        if(checkWin(currentPlayer)){
            judgement.style.display = "grid";
            messagehead.innerText = currentPlayer + " is the winner!"; 
        }
        if(tries == 0){
            judgement.style.display = "grid";
            messagehead.innerText = "Draw!"; 
        }
    }, {once:true})
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







