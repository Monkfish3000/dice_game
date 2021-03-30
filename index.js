var num = Math.random();
var randomNumber1 = Math.floor(num * 6 + 1);

document.querySelectorAll("img")[0].setAttribute("src", `images/dice${randomNumber1}.png`);

var num = Math.random();
var randomNumber2 = Math.floor(num * 6 + 1);


document.querySelectorAll("img")[1].setAttribute("src", `images/dice${randomNumber2}.png`);

function predictWinner() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins";
  } else {
    document.querySelector("h1").innerText = "Draw";
  }
};

predictWinner();


