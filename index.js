randomNumber1=Math.floor(Math.random()*6+1);
var imagePath1="img"+randomNumber1+".png";

randomNumber2=Math.floor(Math.random()*6+1);
var imagePath2="img"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",imagePath1);
document.querySelector(".img2").setAttribute("src",imagePath2);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerText="Draw !!";
} 
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="Player1 Wins 🚩🚩";
}
else{
    document.querySelector("h1").innerText="Player2 Wins ❤️❤️";
}