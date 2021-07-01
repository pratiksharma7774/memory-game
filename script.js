const cards = document.querySelectorAll(".cards");
const container = document.querySelector(".container");
const allCards = Array.from(cards);
const won = document.querySelector('.won');

let isFliped = false;
let firstCard;
let secondCard;
window.onload = ()=>{
    setTimeout(()=>{
        shuffleCards();
    },100)
    
};
function shuffleCards(){
    cards.forEach(card =>{
        let randomNumber = Math.floor(Math.random() * 12);
        card.style.order = randomNumber;
    })
}
function flipCard () {
    this.classList.add("flip");
    if(!isFliped){
        isFliped = true;
        firstCard = this;
    }else{
        secondCard = this;
        makePair();
    }
}
function makePair (){
    console.log("checking");
    if(firstCard.dataset.name === secondCard.dataset.name){
        aMatch();
    }else{
        noMatch();
    }
}
function aMatch(){
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        firstCard.style.visibility = "hidden";
        secondCard.classList.remove("flip");
        secondCard.style.visibility = "hidden";
        allCards.pop(firstCard);
        allCards.pop(secondCard);
        console.log(allCards);
        reset();
        wonGame();
    },1000)
}
function wonGame(){
    if(allCards.length == 0){
        won.style.display = "block";
    }
}
function noMatch(){
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    },500)
}
function reset(){
    isFliped = false;
    firstCard = 0;
    secondCard = 0;
}
cards.forEach(card => card.addEventListener('click',flipCard));