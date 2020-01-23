//random number variable between 1 and 6


//html element declarations
const rollButton = document.getElementById("roll");
const playerScore = document.getElementById("playerScore");
const diceImage = document.getElementById("diceImage");
const totalScore = document.getElementById("totalScore")
const message = document.getElementById("message")


// consts go here

diceImage.style.visibility = "hidden";

let numberRolled;
let pointsScored = 0;

//functions declaration

const diceRoll = () => {
    numberRolled = Math.ceil(Math.random() * 6)
    console.log(`   I am the roll variable ${numberRolled}`)
}



const winOrLose = () => {
    // numberRolled = 2;
    // pointsScored = 21;
    scoreAddition()
    if (numberRolled == 1) {
        message.textContent = "Try again, you lost!"
        pointsScored = 0;
        //resetFunct();
    } else if (pointsScored >= 20) {
        message.textContent = "How did you win? Did you Cheat?"
        pointsScored = 0;
        //resetFunct();
    } else {
        message.textContent = "Oh, carry on then"
    }
}


const scoreAddition = () => {
    //diceRoll()
    //pointsScored += numberRolled
    //scoreAddition.textContent = (`   My total score is: ${pointsScored}`);   
    //scoreAddition.textContent = "score addition"
}



rollButton.addEventListener("click", () => {
    diceRoll()
    playerScore.textContent = numberRolled
    totalScore.textContent = pointsScored += numberRolled
    winOrLose()
    diceImage.style.visibility = "visible"
    diceImage.src = `img/dice${numberRolled}.png`
    console.log("this button works");

})

const resetFunct = () => {
    pointsScored = 0;
    playerScore.textContent = 0
    totalScore.textContent = 0
    diceImage.style.visibility = "hidden";
    message.textContent = "Start again"

}

resetBtn.addEventListener("click", () => {
    resetFunct()
    //console.log("this button worksnnn");
})

// diceRoll()
// winOrLose()
// winOrLose()
// winOrLose()
// winOrLose()
// winOrLose()

// diceRoll()
// console.log(diceRoll);