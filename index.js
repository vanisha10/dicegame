
//1st dice
var n=Math.random();
n=n*6;
n=Math.floor(n);
var randomNumber1=n+1;

if(randomNumber1=="1")
{
    document.querySelector("img.img1").setAttribute("src","images/dice1.png");
}
else if(randomNumber1=="2")
{
    document.querySelector("img.img1").setAttribute("src","images/dice2.png");
}
else if(randomNumber1=="3")
{
    document.querySelector("img.img1").setAttribute("src","images/dice3.png");
}
else if(randomNumber1=="4")
{
    document.querySelector("img.img1").setAttribute("src","images/dice4.png");
}
else if(randomNumber1=="5")
{
    document.querySelector("img.img1").setAttribute("src","images/dice5.png");
}

var m=Math.random();
m=m*6;
m=Math.floor(m);
var randomNumber2=m+1;

if(randomNumber2=="1")
{
    document.querySelector("img.img2").setAttribute("src","images/dice1.png");
}
else if(randomNumber2=="2")
{
    document.querySelector("img.img2").setAttribute("src","images/dice2.png");
}
else if(randomNumber2=="3")
{
    document.querySelector("img.img2").setAttribute("src","images/dice3.png");
}
else if(randomNumber2=="4")
{
    document.querySelector("img.img2").setAttribute("src","images/dice4.png");
}
else if(randomNumber2=="5")
{
    document.querySelector("img.img2").setAttribute("src","images/dice5.png");
}

if(randomNumber1>randomNumber2)
{
    document.querySelector(".container h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector(".container h1").innerHTML="Player 2 Wins!";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector(".container h1").innerHTML="Draw";
}