const plyrbtns = Array.from(document.querySelectorAll(".plyrbtn"));
const cellnumbers = Array.from(document.querySelectorAll("[data-cell]"));
const overlay = document.getElementById("overlay");
let currentPlayer
plyrbtns.forEach(choosePlayer);
cellnumbers.forEach(fillCell)


function choosePlayer(plyrbtn, key){
    plyrbtn.addEventListener("click", function(){
        currentPlayer = key;
        overlay.style.display="none";
    }) 
}


/////REVERSE CARD SUCCESS!!
function fillCell(cellnumber){
    cellnumber.addEventListener("click", function(){
        console.log(currentPlayer);
        cellnumber.innerText = plyrbtns[currentPlayer].innerText;
        plyrbtns.reverse();
    })
}




