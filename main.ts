#! /usr/bin/env node

import inquirer from "inquirer";
// 1) Computer will generate random number.

// 2) User will give input for guessing number.

// 3) Compare user input with computer generate number and show result.

const randomNumber = Math.floor(Math.random()*10+1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1-10:",
    }
])

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratrulations! You guessed right Nummber.");
}else {
    console.log("You Guessed wrong Number.");
}