var EnemysOneTwo = 0;
var appenemyX = 0;
var appenemyY = 0;
//to delete enemy after battle
var appendEnemyInd = 0;

function checkIfBattle(){

EnemysOneTwo
for(let k = 0; k < AllEnemyPos.length; k++){

appenemyX = AllEnemyPos[k][EnemysOneTwo];
EnemysOneTwo++;
appenemyY = AllEnemyPos[k][EnemysOneTwo];
EnemysOneTwo--;


switch(true){

case LastLeft:
if(PlayerX -10 == appenemyX && PlayerY == appenemyY){
console.log("Battle!");
appendEnemyInd = k;
}

break;

case LastRight:
if(PlayerX +10 == appenemyX && PlayerY == appenemyY){
console.log("Battle!");
appendEnemyInd = k;
}

break;

case LastUp:
if(PlayerX == appenemyX && PlayerY -10 == appenemyY){
console.log("Battle!");
appendEnemyInd = k;
}

break;

case LastDown:
if(PlayerX == appenemyX && PlayerY +10 == appenemyY){
console.log("Battle!");
appendEnemyInd = k;
}

break;

}

}

}


function startBattle(){
clearInterval(moooveTheEnemy);







moooveTheEnemy = setInterval(MoveTheEnemys, 2500);
}