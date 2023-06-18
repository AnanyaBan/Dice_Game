let RandomNumber1 = Math.floor(Math.random()*6) + 1;
let link1 = "images/" + "dice" + RandomNumber1 + ".png";
let img1 = document.querySelectorAll("img")[1];
img1.setAttribute("src", link1);

let RandomNumber2 = Math.floor(Math.random()*6) + 1;
let link2 = "images/" + "dice" + RandomNumber2 + ".png";
let img2 = document.querySelectorAll("img")[2];
img2.setAttribute("src", link2);

if(RandomNumber1 > RandomNumber2)
{
    document.querySelectorAll("img")[0].setAttribute("src", "images/winner.png");
    document.querySelector("h1").innerHTML = "Player 1 Wins !!";
}

else if(RandomNumber1 < RandomNumber2)
{
    document.querySelectorAll("img")[0].setAttribute("src", "images/winner.png");
    document.querySelector("h1").innerHTML = "Player 2 Wins !!";
}

else
{
    document.querySelector("h1").innerHTML =  " It's a Draw ! Try Again !";
}
