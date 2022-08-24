var Fcounter = 0;
var leftFire = 0;
var topFire = 0;
let isHit = false;
let timer
const fireball = document.getElementById("FireBall")
var enemypositionLeft = 0;
var enemypositionTop = 0;

var LastLeft = false;
var LastRight = false;
var LastUp = false;
var LastDown = false;

var AppendFXpos = 0;
var AppendFYpos = 0;



function shoot(){
if(!isHit){
createFireball();
move();
}


}

var fBlockedLeft = false;
var fBlockedRight = false;
var fBlockedUp = false;
var fBlockedDown = false;
var fMoveLeft = false;
var fMoveRight = false;
var fMoveUp = false;
var fMoveDown = false;
var fireInterval = setInterval(move, 2000);
var stopFireInterval = clearInterval(fireInterval);
var FireBllss = document.getElementById("FireBalls");



function move() {

    

    FireBllss = document.getElementById("FireBalls");

    if(!isHit){
    switch (true) {
        case fMoveLeft:
            AppendFXpos = AppendFXpos - 10;
            FireBllss.style.left = AppendFXpos + 'px';
            

            break;
        case fMoveRight:
            AppendFXpos = AppendFXpos + 10;
            FireBllss.style.left = AppendFXpos + 'px';
            
            break;
        case fMoveUp:
            AppendFYpos = AppendFYpos - 10;
            FireBllss.style.top = AppendFYpos + 'px';
            
            break;
        case fMoveDown:
            AppendFYpos = AppendFYpos + 10;
            FireBllss.style.top = AppendFYpos + 'px';
            
            break;

    }
            
    }else{
        console.log("FireBall Hit Something!");
    }

    checkIfFireballHits();

}

////////////////////////////////////////////////// 1.
var fireBallAlive = false;

function createFireball() {
    fMoveLeft = false;
    fMoveRight = false;
    fMoveUp = false;
    fMoveDown = false;

    fireBallAlive = true;

    console.log("X = " + PlayerX);
    console.log("Y = " + PlayerY);

  //  console.log(AllWallPos);

    const Fireballs = document.createElement("div");
    Fireballs.id = "FireBalls"
    Fireballs.className = "FireBalls";
    Fireballs.style.position = "absolute";

    switch (true) {
        case LastLeft:
            AppendFXpos = PlayerX - 10;
            AppendFYpos = PlayerY
            Fireballs.className = "FireBallsLeft";
            Fireballs.style.left = AppendFXpos + 'px';
            Fireballs.style.top = AppendFYpos + 'px';
            console.log("lastLeft")
            fMoveLeft = true;
            document.getElementById("Fire").appendChild(Fireballs);    

            break;
        case LastRight:
            AppendFXpos = PlayerX + 10;
            AppendFYpos = PlayerY
            Fireballs.className = "FireBallsRight";
            Fireballs.style.left = AppendFXpos + 'px';
            Fireballs.style.top = AppendFYpos + 'px';
            console.log("lastRight")
            fMoveRight = true;
            document.getElementById("Fire").appendChild(Fireballs);   

            break;

        case LastUp:
            AppendFXpos = PlayerX
            AppendFYpos = PlayerY - 10;
            Fireballs.className = "FireBallsUp";
            Fireballs.style.left = AppendFXpos + 'px';
            Fireballs.style.top = AppendFYpos + 'px';
            console.log("lastUp")
            fMoveUp = true;
            document.getElementById("Fire").appendChild(Fireballs);   

            break;

        case LastDown:
            AppendFXpos = PlayerX
            AppendFYpos = PlayerY + 10;
            Fireballs.className = "FireBallsDown";
            Fireballs.style.left = AppendFXpos + 'px';
            Fireballs.style.top = AppendFYpos + 'px';
            console.log("lastDown")
            fMoveDown = true;
            document.getElementById("Fire").appendChild(Fireballs);   

            break;


    }

    document.getElementById("Fire").appendChild(Fireballs);
    Fcounter++;

    //Start loop here to move fireball or setInterval
    
    fireInterval = setInterval(move, 250);

}



var appendeEnemyHp = 0;
var appendCopyEnemy = [];
function checkIfFireballHits(){
    //make loop that goes through allEnemyPos arr positions and checks if appenFpos maches
    
    AllEnemyPos2 = enemyStartingPos;
    appendCopyEnemy = [];
    
    for(enemyArrInd = 0;enemyArrInd < AllEnemyPos2.length;enemyArrInd++){
        checkX = AllEnemyPos2[enemyArrInd][oneTwo];
        oneTwo++;
        checkY = AllEnemyPos2[enemyArrInd][oneTwo];
        oneTwo--;
    
        if(checkX == AppendFXpos && checkY == AppendFYpos){
        console.log("Enemy Hit!");
        stopFireInterval = clearInterval(fireInterval);
        fireBallAlive = false;

        //add here function to damage enemys!!!
        appendCopyEnemy = AllEnemyPos2[enemyArrInd];
        
        damageEnemy();


        //add here function to animate inpact!!

        
        /////////////////////////////////////////////

        updateEnemys();
        document.getElementById("Fire").innerHTML = "";
        }
    }
    
    
    oneTwo = 0;
    
    for(wallArrInd = 0;wallArrInd < AllWallPos.length;wallArrInd++){
    checkX = AllWallPos[wallArrInd][oneTwo];
    oneTwo++;
    checkY = AllWallPos[wallArrInd][oneTwo];
    oneTwo--;
    
    if(checkX == AppendFXpos && checkY == AppendFYpos){
        console.log("Wall Hit!");
        stopFireInterval = clearInterval(fireInterval);
        fireBallAlive = false;
        document.getElementById("Fire").innerHTML = "";
    }
    
    }
    
    
    
    }




var enemyArrInd = 0;
var wallArrInd = 0;
var oneTwo = 0;
var checkX = 0;
var checkY = 0;


function damageEnemy(){
console.log(appendCopyEnemy);
appendeEnemyHp = appendCopyEnemy[2];
appendeEnemyHp = appendeEnemyHp - 1;
if(appendeEnemyHp <= 0){
AllEnemyPos2.splice(enemyArrInd, 1);
}else{
AllEnemyPos2[enemyArrInd].splice(2, 1);
AllEnemyPos2[enemyArrInd].push(appendeEnemyHp);
console.log(AllEnemyPos2[enemyArrInd]);
}


console.log(appendeEnemyHp);

}

