let userScore = 0;
let computerScore = 0;
let tieScore = 0;
let rounds=0;

const choices= document.querySelectorAll('.image');

/* USER choice print ki */
choices.forEach((choice) => {
    console.log(choice);
       choice.addEventListener('click', () => {
           //console.log('Choice clicked:');
           const userChoice = choice.getAttribute('id');
              //console.log('User choice:', userChoice);
        playGame(userChoice);
      
            });
    });

 /*
Computer choice --ravadaniki moth.floor and random function use 0 to 2 random numbers vastayi
posible ones are rock ,papaer ,scissores are given  in an array
using index we can get either rock/paper/scissors
Math.random *3 --gives a float number bw 0 to 2 ,,math.floor --to make the  float ones to integer
*/
const computerChoice = () => {
    const possible = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return possible[randomNumber];
}


const playGame=(userChoice)=>{
    console.log("userchoice:",userChoice)
    const compChoice= computerChoice();
    console.log("computer choice:", compChoice);
    let changeText=document.getElementById("result-text");/*changeText lo paragraph ni store chesamu
    based on userwins/comp wins/tie it displays different text */


    if (userChoice === compChoice) {
        console.log("It's a tie!");
        let tiesScore=document.getElementById('ties') 
        tiesScore.innerHTML=++tieScore;
        changeText.innerHTML = "It's a tie!";
        changeText.style.backgroundColor = "blue";
       
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ){
       let getUrScore=document.getElementById('user-score') 
        getUrScore.innerHTML=++userScore;
        console.log("User wins this round!");
        changeText.innerHTML = "You win this round!";
        changeText.style.backgroundColor = "green";
     } else {
         let getCompScore= document.getElementById('comp-score')
         getCompScore.innerHTML=++computerScore;
        console.log("Computer wins this round!");
        changeText.innerHTML = "Computer wins this round!";
        changeText.style.backgroundColor = "red";
    }

    
    let totalrounds=document.getElementById("rounds")
    totalrounds.innerHTML=++rounds;


}















