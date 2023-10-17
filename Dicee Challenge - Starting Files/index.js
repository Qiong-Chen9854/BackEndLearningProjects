function randomDice(){
  var num = Math.floor(Math.random() *6 + 1);
  return num;
}

var player1 = randomDice();
var ranDiceSrcPlayer1 = "./images/dice"+player1+".png";
document.querySelector(".img1").setAttribute("src",ranDiceSrcPlayer1);

var player2 = randomDice();
var ranDiceSrcPlayer2 = "./images/dice"+player2+".png";
document.querySelector(".img2").setAttribute("src",ranDiceSrcPlayer2);


if(player1 > player2){
  document.querySelector("h1").innerHTML = "👏Play 1 Wins!"
} else if(player1<player2){
  document.querySelector("h1").innerHTML = "Play 2 Wins!👏"
}else{
  document.querySelector("h1").innerHTML = "Draw!"
}

