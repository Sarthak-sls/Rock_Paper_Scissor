let humanScore=0,computerScore=0;
function getComputerChoice(){
  let randomnum=(Math.floor(Math.random()*3)+1);
  if (randomnum==1) {
    return "rock";
  } else if(randomnum==2){
    return "scissor";
  }
  else{
    return "paper";
    // hello world
  }
}

const arr = [1,2,3,4]

arr.some()
function getHumanChoice(){
   let input=prompt("Enter your choice:")  
  //let input="Rock"
  input=input.toLowerCase();
  return input;
}
let humanChoice=getHumanChoice()
let computerChoice=getComputerChoice()
  
  
function playround(humanChoice,computerChoice){
         if (humanChoice=="rock"&&computerChoice=="rock") {
          console.log("it's a draw")
           
         }
        else  if (humanChoice=="paper"&&computerChoice=="paper") {
          console.log("it's a draw")
         }
        else if (humanChoice=="scissor"&&computerChoice=="scissor") {
           console.log("it's a draw")
         }
         else if (humanChoice=="rock"&&computerChoice=="scissor") {
        console.log("it's a win")
           humanScore+=1
         }
         else if (humanChoice=="rock"&&computerChoice=="paper") {
           console.log("it's a loss")
           computerScore+=1
         }
         else if (humanChoice=="paper"&&computerChoice=="rock") {
           console.log("it's a win")
           humanScore+=1
         }
         else if (humanChoice=="paper"&&computerChoice=="scissor") {
           console.log("it's a loss")
           computerScore+=1
         }
         else if (humanChoice=="scissor"&&computerChoice=="rock") {
           console.log("it's a loss")
           computerScore+=1
         }
         else if (humanChoice=="scissor"&&computerChoice=="paper") {
           console.log("it's a win")
           humanScore+=1}
        
}
   
  let game=true;
  while (game) {
    if (humanScore!=5 && computerScore!=5) {
      playround(humanChoice,computerChoice)
       console.log(`computer_score${computerScore}`)
       console.log(`human_score${humanScore}`)
    } else if(humanScore==5){
      console.log("you win!")
      game=false;
    }
    else{
      console.log("you lose!")
      game=false;
    }
  }

  function playGame(){
    playround()
  }

playGame();