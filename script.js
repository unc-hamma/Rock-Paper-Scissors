let sapienScore = 0;
let computerScore = 0;

function getComputerChoice(){

    let choic_indx = Math.floor(Math.random() * 3);

    if (choic_indx == 0) return "rock";
    
    else if (choic_indx ==1) return "paper";

    else return "scissors";

}

function getHumanChoice(){
    
    let choice = prompt("What is your choice fellow Ape?"); 
    return choice.toLowerCase();
}

// console.log(HuChoice());
// console.log(getComputerChoice());

function playRound(humanChoice, computerChoice){

    if(humanChoice != computerChoice){

        if(humanChoice == "rock" && computerChoice == "scissors") { sapienScore++; console.log("You win! Rock beats Scissors.");}
        else if(humanChoice == "rock" && computerChoice == "paper") { computerScore++; console.log("You lose! Paper beats Rock");}

        else if(humanChoice == "paper" && computerChoice == "rock") { sapienScore++; console.log("You win! Paper beats Rock.");}
        else if(humanChoice == "paper" && computerChoice == "scissors") { computerScore++; console.log("You lose! scissors beats paper.");}
        
        else if(humanChoice == "scissors" && computerChoice == "paper") { sapienScore++; console.log("You win! Scissors beats Paper.");}
        else if(humanChoice == "scissors" && computerChoice == "rock") { computerScore++; console.log("You lose! Rock beats Scissors.");}
    }

    else console.log("It's a tie! You both chose the same");
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(computerSelection);

// playRound(humanSelection,computerSelection);

function playGame(){
    
    sapienScore = 0;
    computerScore = 0;
    
    for(let i = 0; i < 5; i++) playRound(getHumanChoice(), getComputerChoice());

    if(sapienScore > computerScore) console.log("Hooray! You win!");
    
    else if (sapienScore < computerScore) console.log("Nooo! Ape lost :(");

    else console.log("Not bad for a monkey ;)");
}

playGame();