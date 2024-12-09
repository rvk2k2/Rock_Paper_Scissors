let userscore=0;
let compscore=0;

const choices =document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");



const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
   const randidx= Math.floor( Math.random()*3); 
    return options[randidx];
}

const drawgame  = () =>{
    console.log(" the game is draw");
    msg.innerText = "Its a Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win!");
        msg.innerText = `you win  your ${userchoice}  beats ${compchoice}`;
        msg.style.backgroundColor = "green";

 }
else {
    compscore++;
    compscorepara.innerText = compscore;
    console.log("you lose");
    msg.innerText = `you Lose. computer's ${compchoice} beats ${userchoice} `;
    msg.style.backgroundColor = "red";
}

}



const playgame = (userchoice) => {
    console.log("user choise is",userchoice);
    const compchoice = gencompchoice();
    console.log("the computer choice is",compchoice);


    if(userchoice === compchoice){
     drawgame();

} else
{
   let userwin = true;
   if(userchoice === "rock"){
   userwin = compchoice === "paper" ? false : true ;

   }else if(userchoice === "paper"){
    userwin = compchoice === "scissors" ? false : true;
   } else {
    userwin = compchoice === "rock" ? false : true;
   }
   showinner(userwin,userchoice,compchoice);
}
};


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
});

