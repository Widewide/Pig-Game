'use strict';
let rollDice=document.querySelector(".btn--roll");
let hold=document.querySelector(".btn--hold");
let newGame=document.querySelector(".btn--new");
let score0=document.querySelector("#score--0");
let score1=document.querySelector("#score--1");
let imgEle=document.querySelector(".dice");
let currPlayer=true;
let currScore0=document.querySelector("#current--0");
let currScore1=document.querySelector("#current--1");
let hidebox=document.querySelector(".hidebox");
let msg=document.querySelector(".msg");

let activecurrScore=currScore0;
const playerSwitch=()=>{
    activecurrScore.innerHTML=0;
    currPlayer=!currPlayer;
    if(currPlayer){
        document.querySelector(".player--0").classList.add("player--active");
        document.querySelector(".player--1").classList.remove("player--active");
    }
    else{
        document.querySelector(".player--1").classList.add("player--active");
        document.querySelector(".player--0").classList.remove("player--active");        
    }
    
}
const checkWinner=(player)=>{
    let val=Number(player.innerHTML);
    if(val>=100){
        if(player==score0){
            document.querySelector(".player--0").classList.add("player--winner");
            msg.innerHTML="winner is player1";

        }
        else{
            document.querySelector(".player--1").classList.add("player--winner");
            msg.innerHTML="winner is player2";
        }
        rollDice.disabled=true;
        hidebox.classList.remove("hide");
    }
    

}

const rollFunction=()=>{
    let x=Math.floor(Math.random()*6)+1;
    console.log(x);
    if(currPlayer){
        activecurrScore=currScore0;
    }
    else{
        activecurrScore=currScore1;
    }
    if(x==1){
        imgEle.src="dice-1.png";
        playerSwitch()
    }
    else{
    if(x==2){
        imgEle.src="dice-2.png";
    }
    if(x==3){
        imgEle.src="dice-3.png";
    }
    if(x==4){
        imgEle.src="dice-4.png";
    }
    if(x==5){
        imgEle.src="dice-5.png";
    }
    if(x==6){
        imgEle.src="dice-6.png";
    }
    let temp=Number(activecurrScore.innerHTML);
    temp+=x;
    activecurrScore.innerHTML=temp;
}

}
const holdFunc=()=>{
    if(currPlayer){
        let temp=Number(score0.innerHTML);
        let addnum=Number(activecurrScore.innerHTML);
        temp+=addnum;
        score0.innerHTML=temp;
        checkWinner(score0);
    }
    else{
        let temp=Number(score1.innerHTML);
        let addnum=Number(activecurrScore.innerHTML);
        temp+=addnum;
        score1.innerHTML=temp;
        checkWinner(score1);
    }
    
    playerSwitch();
}

const reset=()=>{
    score0.innerHTML=0;
    score1.innerHTML=0;
    currPlayer=true;
    currScore0.innerHTML=0;
    currScore1.innerHTML=0;
    rollDice.disabled=false;
    hidebox.classList.add("hide")
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");
}

rollDice.addEventListener("click",rollFunction);
hold.addEventListener("click",holdFunc);
newGame.addEventListener("click",reset);