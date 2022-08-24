////Stolen controls
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        pressUp();
    }
    else if (e.keyCode == '40') {
        // down arrow
        pressDown();
        
    }
    else if (e.keyCode == '37') {
       // left arrow
       pressLeft();
    }
    else if (e.keyCode == '39') {
       // right arrow
       pressRight();
    }
    else if (e.keyCode == '83') {
        // S
        if(fireBallAlive == false){
        createFireball();
        }
     }
     else if (e.keyCode == '68') {
        // D
        pressAttackBtn();
     }
     else if (e.keyCode == '82') {
        // R
        mapSwitchF();
     }

}

///////////////////////////////////////////////////////////////////////////

//Player Movement Here

function pressLeft(){
LastLeft = true;
LastRight = false;
LastUp = false;
LastDown = false;


checkWallMovement()
checkIfBattle()
MoveLeft()
checkForCoins()
}


function pressRight(){
LastLeft = false;
LastRight = true;
LastUp = false;
LastDown = false;


checkWallMovement()
checkIfBattle()
MoveRight()
checkForCoins()  
}


function pressUp(){
LastLeft = false;
LastRight = false;
LastUp = true;
LastDown = false;


checkWallMovement()
checkIfBattle()
MoveUp()
checkForCoins() 
}


function pressDown(){
LastLeft = false;
LastRight = false;
LastUp = false;
LastDown = true;


checkWallMovement()
checkIfBattle()
MoveDown()
checkForCoins()
}

////////////////////////////////////////////////////


var movementWallArrInd = 0;
var movementCheckX = 0;
var movementCheckY = 0;
var movementOneTwo = 0;
var PlayerPosX = 0;
var PlayerPosY = 0;
var CantMove = false;



function checkWallMovement(){
    CantMove = false;
    

    for(movementWallArrInd = 0;movementWallArrInd < AllWallPos.length;movementWallArrInd++){
        movementCheckX = AllWallPos[movementWallArrInd][movementOneTwo];
        movementOneTwo++;
        movementCheckY = AllWallPos[movementWallArrInd][movementOneTwo];
        movementOneTwo--;
        

        switch(true){

            case LastLeft:
    
            if(movementCheckX == PlayerX - 10 && movementCheckY == PlayerY){
            console.log("Thats a wall!?")
            CantMove = true;
            }else{
                
            }
    
            break;
    
            case LastRight:
    
            if(movementCheckX == PlayerX + 10 && movementCheckY == PlayerY){
            console.log("Thats a wall!?")
            CantMove = true;
            }else{
                
            }
    
            break;
    
            case LastUp:
    
            if(movementCheckX == PlayerX && movementCheckY == PlayerY - 10){
            console.log("Thats a wall!?")
            CantMove = true;
            }else{
                
            }
    
            break;
    
            case LastDown:
    
            if(movementCheckX == PlayerX && movementCheckY == PlayerY + 10){
            console.log("Thats a wall!?")
            CantMove = true;
            }else{
                
            }
    
            break;
                            
    
            }


        }
        

        

        




}

var movementCoinArrInd = 0;
var movementCheckCoinX = 0;
var movementCheckCoinY = 0;

var appendCoinInt = 0;

function checkForCoins(){

for(movementCoinArrInd = 0;movementCoinArrInd < AllCoinPos.length;movementCoinArrInd++){
    movementCheckCoinX = AllCoinPos[movementCoinArrInd][movementOneTwo];
    movementOneTwo++;
    movementCheckCoinY = AllCoinPos[movementCoinArrInd][movementOneTwo];
    movementOneTwo--;
    
    if(movementCheckCoinX == PlayerX && movementCheckCoinY == PlayerY){
    console.log("Thats a coin");
    appendCoinInt = movementCoinArrInd;
    updateCoins()
// function here to make coin sound

    }else{
    
    }
    
    }



}





//////////////////////////////////////////////////////////////////////
function MoveLeft(){

if(!CantMove){
PlayerX = PlayerX - 10;
document.getElementById("Player").style.left = PlayerX + "px";
document.getElementById("Player").style.top = PlayerY + "px";
checkWinBlock();
}else{
console.log("Something Went Wrong!!")
}


}

function MoveRight(){

    if(!CantMove){
    PlayerX = PlayerX + 10;
    document.getElementById("Player").style.left = PlayerX + "px";
    document.getElementById("Player").style.top = PlayerY + "px";
    checkWinBlock();
    }else{
    console.log("Something Went Wrong!!")
    }
    
    
    }


function MoveUp(){

if(!CantMove){
PlayerY = PlayerY - 10;
document.getElementById("Player").style.left = PlayerX + "px";
document.getElementById("Player").style.top = PlayerY + "px";
checkWinBlock();
}else{
console.log("Something Went Wrong!!")
}


}

function MoveDown(){

if(!CantMove){
PlayerY = PlayerY + 10;
document.getElementById("Player").style.left = PlayerX + "px";
document.getElementById("Player").style.top = PlayerY + "px";
checkWinBlock();
}else{
console.log("Something Went Wrong!!")
}


}
///////////////////////////////////////////////////////////////////////


function checkWinBlock(){
if(PlayerX == kX && PlayerY == kY){
console.log("Win");
NewGame();
}
}

