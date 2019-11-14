let flipped = false;
function flip(){
    if (flipped){
        document.getElementById("img").src = "cardBack.jpg";
        flipped = false;
    }
    else{
        document.getElementById("img").src = "cardFront.jpg";
        flipped = true;
    }
}