let btns = document.querySelectorAll('.btn');
let Winner = document.querySelector(".winner")
let resetBtn = document.querySelector(".reset")
let checker = true;


const patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    checker = true;
    enableBtns();
    Winner.innerText = "";
}

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (checker) {

            btn.style.color = "red"

            btn.innerHTML = "X"
            checker = false
        } else {

            btn.style.color = "blue"

            btn.innerHTML = "O"
            checker = true;
        }
        btn.disabled = true;

        checkWinner();  
    })
})

const showWinner = (winner) => {
    if(winner === "X"){
        Winner.style.color = "red"
        Winner.innerText = `Congrats!! Winner is "${winner}"`
    }

    else{
        Winner.style.color = "blue"
        Winner.innerText = `Congrats!!! Winner is "${winner}"`
    }
}

const enableBtns = ()=>{
for(let btn of btns){
    btn.disabled = false;
    btn.innerText = "";
}
}

const checkWinner = ()=>{ 
    for(let pattern of patterns){
        let position1Val = btns[pattern[0]].innerText
        let position2Val = btns[pattern[1]].innerText
        let position3Val = btns[pattern[2]].innerText
        
        if(position1Val != "" && position2Val != "" && position3Val != ""){
            if(position1Val === position2Val && position2Val === position3Val){
                
                for(let btn of btns){
                    btn.disabled = true;
                }
                showWinner(position1Val);
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame)