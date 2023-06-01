let getComputerChoice = () => {

    // Initialize the variables and generate a random number
    // between 1 - 3.
    // Math.floor will round up the number 
    // Math.random will help you generate number between 0 and 1
    // Multiply by 3 to generate a number that 3 is the maximum
    // Add 1 so we can set the minimum number to generate
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let choice = ""

    // after generating the random number, we will now assign
    // it with their corresponding value.
    if (randomNum == 1){
        choice = "rock"
    }
    else if(randomNum == 2){
        choice = "paper"
    }
    else if(randomNum == 3){
        choice = "scissors"
    }
    else{
        choice = "Out of bounds! Error"
    }

    return choice

}

let playRound = (playerSelection, computerSelection) => {

    // converts the player selection to lowercase
    playerSelection = playerSelection.toLowerCase()

    // checks player and computer selection to determine the winner.
    if(playerSelection === computerSelection){
        return "It's a Tie!"
    }
    else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return "You Lose! Paper beats Rock"
        }
        else{
            return "Congratulations You won! Rock beats Scissors"
        }
    }
    else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            return "You Lose! Rock beats Scissors"
        }
        else{
            return "Congratulations You won! Scissors beats Paper"
        }
    }
    else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            return "You Lose! Scissors beats Paper"
        }
        else{
            return "Congratulations You won! Paper beats Rock"
        }
    }
    else {
        return "Please input the appropriate selection. Thank You"
    }
}

// player input and computer input
let gameInput = () => {
    let playerSelection = prompt("Welcome to Rock-Paper-Scissor Game! Type your action! 'rock', 'paper' or 'scissors'")
    let computerSelection = getComputerChoice()

    console.log(playRound(playerSelection, computerSelection))
}

// main loop for the game
let game = () => {
    for(let i = 0; i <= 5; i++){
        gameInput()
    }
}

// calling the function game
game()