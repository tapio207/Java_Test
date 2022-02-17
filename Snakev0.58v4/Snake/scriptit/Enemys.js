// 0 = x,  1 = y
var enemyStartingPos = [[420, 340, 2], [340, 350, 2], [510, 330, 2], [420, 440, 2], [610, 340, 2]];

var EnemyInd = 0;
var EnemyOneTwo = 0;
var enemySpawnX = 0;
var enemySpawnY = 0;
var enemySpawnHp = 0;

var AppendEnemyPos = [];
var EnemyX = 0;
var EnemyY = 0;
var AllEnemyPos = [];




function spawnEnemys(){
AllEnemyPos = [];

for(EnemyInd = 0; EnemyInd < enemyStartingPos.length;EnemyInd++){
enemySpawnX = enemyStartingPos[EnemyInd][EnemyOneTwo];
EnemyOneTwo++;
enemySpawnY = enemyStartingPos[EnemyInd][EnemyOneTwo];
EnemyOneTwo++;
enemySpawnHp = enemyStartingPos[EnemyInd][EnemyOneTwo];
EnemyOneTwo = 0;

const newDiv66 = document.createElement("div");
newDiv66.id = "Enemy" + EnemyInd;
newDiv66.className = "Enemy";

//Give div a position
newDiv66.style.position = "absolute";
newDiv66.style.left = enemySpawnX + 'px';
newDiv66.style.top = enemySpawnY + 'px';

//Create a div
document.getElementById("EnemyDiv").appendChild(newDiv66);


AppendEnemyPos = [];
EnemyX = enemySpawnX;
EnemyY = enemySpawnY;
AppendEnemyPos.push(EnemyX);
AppendEnemyPos.push(EnemyY);
AppendEnemyPos.push(enemySpawnHp);
AllEnemyPos.push(AppendEnemyPos);


}


}


var EnemyMovementStatu = 0;
function editIntXY(){

switch(true){
case (EnemyMovementStatu == 0):
editIntX = 10;
editIntY = 0;
break;
case (EnemyMovementStatu == 1):
editIntX = 0;
editIntY = 10;
break;
case (EnemyMovementStatu == 2):
editIntX = -10;
editIntY = 0;
break;
case (EnemyMovementStatu == 3):
editIntX = 0;
editIntY = -10;
EnemyMovementStatu = -1;
break;

}

}







var editedEnemyArr = [];
var appendEditedEnemyArr = [];
var editEnemyOneTwo = 0;
var appendEditX = 0;
var appendEditY = 0;
var appendEditHp = 0;
function editEnemyPos(){

    editedEnemyArr = [];

    for(let i = 0;i < AllEnemyPos.length;i++){

        appendEditedEnemyArr = [];
        appendEditX = AllEnemyPos[i][editEnemyOneTwo];
        editEnemyOneTwo++;
        appendEditY = AllEnemyPos[i][editEnemyOneTwo];
        editEnemyOneTwo++;
        appendEditHp = AllEnemyPos[i][editEnemyOneTwo];
        editEnemyOneTwo = 0;
        appendEditX = appendEditX + editIntX;
        appendEditY = appendEditY + editIntY;


        appendEditedEnemyArr.push(appendEditX);
        appendEditedEnemyArr.push(appendEditY);
        appendEditedEnemyArr.push(appendEditHp);
        editedEnemyArr.push(appendEditedEnemyArr);


    }

    enemyStartingPos = editedEnemyArr;

}




function MoveTheEnemys(){
editIntXY();
editEnemyPos();
checkForPlayer();
document.getElementById("EnemyDiv").innerHTML = "";
spawnEnemys();

EnemyMovementStatu++;
}

var moooveTheEnemy = setInterval(MoveTheEnemys, 2500);
 
var aaep = [];
function updateEnemys(){
aaep = AllEnemyPos2;
enemyStartingPos = aaep;
document.getElementById("EnemyDiv").innerHTML = "";
spawnEnemys();
}


function checkForPlayer(){



    
}


