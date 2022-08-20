const plyrbtns = Array.from(document.querySelectorAll(".plyrbtn"));
const cellNumbers = Array.from(document.querySelectorAll("[data-cell]"));
const messagehead = document.getElementById("messagehead");
const judgement = document.getElementById("judgement");
const overlay = document.getElementById("overlay");
const replaybtn = document.getElementById("replaybtn");

let chosenPlayer
let tries

plyrbtns.forEach(choosePlayer);
cellNumbers.forEach(fillCell)

function choosePlayer(plyrbtn, index){
    plyrbtn.addEventListener("click", function(){
        chosenPlayer = index;
        overlay.style.display="none";
        tries = 9;
    }) 
}

function fillCell(cellNumber){
  
    cellNumber.addEventListener("click", function() {
        let currentPlayer = plyrbtns[chosenPlayer].innerText;
        if(cellNumber.firstChild.innerText === ""){
            cellNumber.firstChild.innerText = currentPlayer; 
            tries--       
        }
        swapTurns(currentPlayer)
        if(checkWin(currentPlayer)){
            judgement.style.display = "grid";
            messagehead.innerText = currentPlayer + " is the winner!";
            footer.innerText = "";
        }
        checkDraw()
        plyrbtns.reverse();

    })
}

function swapTurns(player){
  player === "X" ? footer.innerText = "O's Turn" : footer.innerText = "X's Turn"
}

function checkDraw(){
    if(tries == 0){
            judgement.style.display = "grid";
            messagehead.innerText = "Draw!"; 
            footer.innerText = "";
    } 
}

///sort or reverse letters based on tries!
const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function checkWin(player){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellNumbers[index].firstChild.innerText.includes(player);
        })
    })
}

replaybtn.addEventListener("click", function(){
    if(plyrbtns[0].innerText === "X"){
      plyrbtns.reverse();
    }
    judgement.style.display= "none";
    overlay.style.display= "grid";
    cellNumbers.forEach(emptyCell);
    tries = 0;
});

function emptyCell(emptied){
    emptied.firstChild.innerText = "";
}


///Switch the buttons back to defualt positions when game ends
///Must be in reverse alphabetical order