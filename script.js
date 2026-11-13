let sapienScore = 0;
let computerScore = 0;
const resultDiv = document.querySelector('#result');


function playRound(e){

    let choic_indx = Math.floor(Math.random() * 3);
    let computerChoice = "";

    if (choic_indx == 0) computerChoice = "rock";
    
    else if (choic_indx ==1) computerChoice = "paper";

    else computerChoice = "scissors";

    let humanChoice = e.target.textContent;

    let resultText = "\n***************************************\n" + computerChoice + " was the computer's choice \n" + humanChoice + " is your choice \n";

    if(humanChoice != computerChoice){

        if(humanChoice == "rock" && computerChoice == "scissors") { sapienScore++; resultText += "You win! Rock beats Scissors.";}
        else if(humanChoice == "rock" && computerChoice == "paper") { computerScore++; resultText += "You lose! Paper beats Rock";}

        else if(humanChoice == "paper" && computerChoice == "rock") { sapienScore++; resultText += "You win! Paper beats Rock.";}
        else if(humanChoice == "paper" && computerChoice == "scissors") { computerScore++; resultText += "You lose! scissors beats paper.";}
        
        else if(humanChoice == "scissors" && computerChoice == "paper") { sapienScore++; resultText += "You win! Scissors beats Paper.";}
        else if(humanChoice == "scissors" && computerChoice == "rock") { computerScore++; resultText += "You lose! Rock beats Scissors.";}
    }

    else resultText += "It's a tie! You both chose the same";

    resultText += "\n Your score is : " + sapienScore + "\nComputer's score is : " + computerScore;

    if(sapienScore === 5 ) resultText += "\n WE GOT OURSELVES A WINNER";
    else if(computerScore == 5) resultText += "\n THEY DID AGAIN";

    resultDiv.textContent += resultText;

}

const button = document.querySelector('ul');

button.addEventListener("click", e => playRound(e));
