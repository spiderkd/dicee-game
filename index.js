var randomNumber1 = Math.random();

randomNumber1 = Math.floor(randomNumber1 * 6 + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageScr = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageScr);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
// when 1st image is grater
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩player1 won";
}
// if both are same
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩player2 won";
}
// when they are same
else {
  document.querySelector("h1").innerHTML = "🥲its a draw";
}
