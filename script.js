let boxes = document.querySelectorAll(".box");
let winDisplay = document.querySelector(".windisplay");
let winMsg = document.querySelector(".winmsg");
let newGame = document.querySelector("#newGame");
let reset = document.querySelector(".reset");
let boxcontainer = document.querySelector(".boxes");
let startgame = document.querySelector("#Start");
let home = document.querySelector(".home");
let turnX = true;
let countClick = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.innerText = "O";
            turnX = true;
        }
        countClick += 1;
        box.disabled = true;
        let win = checkWinner();
        if (win != true && countClick === 9){
            dispplayDraw();
        }
    })
})

const displayWinner = (winner) => {
    winMsg.innerText = `Congratulations ! Player ${winner} You Won The Game`
    winDisplay.classList.remove("hide");
    boxcontainer.classList.add("hide");
    reset.classList.add("hide");
}

const dispplayDraw = () => {
    winMsg.innerText = `That's a draw !`
    winDisplay.classList.remove("hide");
    boxcontainer.classList.add("hide");
    reset.classList.add("hide");
}
const Start = ()=>{
    for(let box of boxes){
        
        box.disabled = false;
        box.innerText = "";
    }
    countClick = 0;
    home.classList.add("hide");
    startgame.classList.add("hide");
    winDisplay.classList.add("hide");
    boxcontainer.classList.remove("hide");
    reset.classList.remove("hide");
}
newGame.addEventListener("click",Start);
reset.addEventListener("click",Start);
startgame.addEventListener("click",Start)

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                displayWinner(pos1val);
                return true;
            }
        }
    }
}

