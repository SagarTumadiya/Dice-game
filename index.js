var randomNumber1;
randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);
var randomNumber2;
randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 won";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 won";

}
else{
  document.querySelector("h1").innerHTML="Tie!";

}
