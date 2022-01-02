const plyrbtns = Array.from(document.getElementsByClassName("plyrbtn"));

plyrbtns.forEach(choosePlayer);

let currentPlayer;
function choosePlayer(plyrbtn){
    plyrbtn.addEventListener("click", function(){
        currentPlayer = plyrbtn.innerHTML
        console.log(currentPlayer);
    })
    
}
