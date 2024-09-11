const rock=document.querySelector(".rock")
                    .addEventListener("click",function(){
                      playRound("rock");
                    });
         
const paper=document.querySelector(".paper")
                    .addEventListener("click",function(){
                      playRound("paper");
                    });                    
const scissor=document.querySelector(".scissor")
                    .addEventListener("click",function(){
                      playRound("scissor");
                    });

  const playerScore=document.querySelector(".playerScore");
  const computerScore=document.querySelector(".computerScore");
  let array=["rock","paper","scissor"];

  const result=document.querySelector(".result");
  const Statement=document.querySelector(".Statement")
  playerScore.innerText=0;
  computerScore.innerText=0;

  function compt(){
    return array[Math.floor(Math.random()*3)];
  }

  function playRound(player){
    let comp=compt();
   
    if (player=="rock" && comp=="rock" && playerScore.innerText<5 && computerScore.innerText<5) {
      Statement.innerText=`Player=>${player} :Computer=>${comp}`+"\n"+`Tie`;
    } else if (player=="rock" && comp=="paper" && playerScore.innerText<5 && computerScore.innerText<5) {
      Statement.innerText=`Player=>${player} :Computer=>${comp}`+"\n"+`computer wins`;
      computerScore.innerText++;
    }
    else if (player=="rock" && comp=="scissor" && playerScore.innerText<5 && computerScore.innerText<5) {
      Statement.innerText=`Player=>${player} :Computer=>${comp}`+"\n"+`you win`;
      playerScore.innerText++;
    }
    else if (player=="paper" && comp=="paper" && playerScore.innerText<5 && computerScore.innerText<5) {
      Statement.innerText=`Player=>${player} :Computer=>${comp}`+"\n"+`Tie`;
    
    }
    else if (player=="paper" && comp=="rock" && playerScore.innerText<5 && computerScore.innerText<5) {
      Statement.innerText=`Player=>${player} :Computer=>${comp}`+"\n"+`you win`;
      playerScore.innerText++;
    }
    else if (player=="paper" && comp=="scissor" && playerScore.innerText<5 && computerScore.innerText<5) {
      Statement.innerText=`Player=>${player} :Computer=>${comp}`+"\n"+`computer win`;
      computerScore.innerText++;
    }
    else if (player=="scissor" && comp=="scissor" && playerScore.innerText<5 && computerScore.innerText<5) {
      Statement.innerText=`Player=>${player} :Computer=>${comp}`+"\n"+`Tie`;
    
    }
    else if (player=="scissor" && comp=="rock" && playerScore.innerText<5 && computerScore.innerText<5) {
      Statement.innerText=`Player=>${player} :Computer=>${comp}`+"\n"+`computer win`;
      computerScore.innerText++;
    }
    else if (player=="scissor" && comp=="paper" && playerScore.innerText<5 && computerScore.innerText<5) {
      Statement.innerText=`Player=>${player} :Computer=>${comp}`+"\n"+`you win`;
      playerScore.innerText++;
    }
    if (playerScore.innerText==5) {
      result.innerText="YOU WON THE GAME";
    }
    else if(computerScore.innerText==5){
      result.innerText="YOU LOST THE GAME";
    }
  }