let CPU_choice;
let Sapien_choice;

let sapienScore = 0;
let computerScore = 0;

function getComputerChoice(){

    let choic_indx = Math.floor(Math.random() * 3);

    if (choic_indx == 0) CPU_choice = "rock";
    
    else if (choic_indx ==1) CPU_choice = "paper";

    else CPU_choice = "scissors";

    console.log(CPU_choice);
}

function getHumanChoice(){
    
    Sapien_choice = prompt("What is your choice fellow Ape?");
    console.log(Sapien_choice);
}

getHumanChoice();
getComputerChoice();
