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
  suitInCard.innerText = suits[suit];
  if (suitInCard === "♥" || "♦") {
    suitInCard.classList.add(".text-danger");
  } else {
    suitInCard.classList.add(".text-body");
  }
  document.querySelector(".header").appendChild(suitInCard);
  //document.querySelector(".bottom").appendChild(suitInCard);

  let numberInCard = document.createElement("p");
  numberInCard.innerText = numbers[number];
  document.querySelector(".center").appendChild(numberInCard);
};
