import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let suit = Math.floor(Math.random() * suits.length);
  let number = Math.floor(Math.random() * numbers.length);

  let suitInCard = document.createElement("p");
  let randomSuit = suits[suit];
  suitInCard.innerText = randomSuit;
  if (randomSuit === "♥" || randomSuit === "♦") {
    suitInCard.classList.add("text-danger");
  } else {
    suitInCard.classList.add("text-body");
  }
  let suitInCard2 = suitInCard;

  document.querySelector(".header").appendChild(suitInCard);
  //document.querySelector(".bottom").appendChild(suitInCard2); --> Por qué no aparece el palo en la parte inferior?

  let numberInCard = document.createElement("p");
  numberInCard.innerText = numbers[number];
  document.querySelector(".center").appendChild(numberInCard);
};
