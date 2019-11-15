let color = "red";
let placement = 1;
let forward = true;
document.body.style.backgroundColor = color;

setInterval(change,500);

function change(){
    if (forward === true){
        if (placement === 0){
            color = "red";
            document.body.style.backgroundColor = color;
            placement++;
        }else if (placement === 1){
            color = "orange";
            document.body.style.backgroundColor = color;
            placement++;
        }else if (placement === 2){
            color = "yellow";
            document.body.style.backgroundColor = color;
            placement++;
        }else if (placement === 3){
            color = "green";
            document.body.style.backgroundColor = color;
            placement++;
        } else if (placement === 4){
            color = "blue";
            document.body.style.backgroundColor = color;
            placement++;
        } else if (placement === 5){
            color = "indigo";
            document.body.style.backgroundColor = color;
            placement++;
        }else if (placement === 6){
            color = "violet";
            document.body.style.backgroundColor = color;
            placement--;
            forward = false;
        }
    }else if (forward === false){
        if (placement === 0){
            color = "red";
            document.body.style.backgroundColor = color;
            placement++;
        }else if (placement === 1){
            color = "orange";
            document.body.style.backgroundColor = color;
            placement--;
        }else if (placement === 2){
            color = "yellow";
            document.body.style.backgroundColor = color;
            placement--;
        }else if (placement === 3){
            color = "green";
            document.body.style.backgroundColor = color;
            placement--;
        } else if (placement === 4){
            color = "blue";
            document.body.style.backgroundColor = color;
            placement--;
        } else if (placement === 5){
            color = "indigo";
            document.body.style.backgroundColor = color;
            placement--;
        }else if (placement === 6){
            color = "violet";
            document.body.style.backgroundColor = color;
            placement--;
        }
    }
}