window.onload = function(){
timeLoad();
}


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

}
////

//empty
var o = "o";
var o1 = "o1"
//wall's
var w = "w";
var w1 = "w1";
//Player
var p = "p";
//Basic Enemy
var e = "e";
var e1 = "e1";
//coins
var c = "c";



//Map layout
var mapLayArr= [[w, w, w,  w, w, w,  w, w, w],
                [w, w, w,  w, w, w,  w, w, w],
                [w, w, w,  w, w, w,  w, w, w],
                [w, w, w,  w, w, w,  w, w, w],
                [w, o, o,  o, o, o,  o, o, o], 
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  p, o, o,  o, o, o], 
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o], 
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  e, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o], 
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  e, o, o,  o, o, o], 
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o], 
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, w, w,  w, w, w,  w, w, w],
                [w, w, w,  o, o, o,  w, w, w],
                [w, w, w,  w, w, w,  w, w, w], 
                [o, o, o,  w, w, w,  w, w, w],
                [w, o, c,  o, o, o,  c, o, c], 
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, c, o,  o, o, c],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  w, w, w,  w, w, w],
                [w, o, o,  w, w, w,  w, w, w],
                [w, o, o,  w, w, w,  w, w, w], 
                [w, w, w,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o], 
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [c, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [w, w, w,  w, w, w,  w, w, w],
                [w, w, w,  o, o, o,  w, w, w],
                [w, w, w,  w, w, w,  w, w, w],
                [w, w, w,  w, w, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, e,  o, o, o,  o, o, o],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [w, o, o,  w, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  w, w, w,  w, w, w],
                [w, o, o,  o, o, o,  o, o, o],
                [w, o, o,  o, o, o,  o, o, o],
                [w, w, w,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  e, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, e, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [w, o, o,  w, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  w, w, w,  w, w, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, o], 
                [w, w, w,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [c, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  e, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, o],
                [o, o, o,  o, o, o,  o, o, w],
                [o, o, o,  o, o, o,  o, o, w],
                [w, w, w,  w, w, w,  w, w, w],
                [w, w, w,  w, w, w,  w, w, w],
                [w, w, w,  w, w, w,  w, w, w],
                [w, w, w,  w, w, w,  w, w, w]]
////
//Player position to save the cpu
PlayerPositionArray = 0;
PlayerPositionIndex = 0;
//Goes true when fight starts
var BattleOn = false;
var PlayerSpotted = false;

//HP ja mana yms..
var enemyHp = 0;
var HP = 10;
var Money = 10;
var MP = 100;
var enemyDmg = 0;

//For Div positioning
var leftPos = 300;
var topPos = 300;
var arInd = 4;

//For BasicEnemyMovement
var ePosArr = [];
var ePos = [];
var eArrPos = 0;
var eInnerArrPos = 0;
var ePosAppend = "";



//Antaa joka blokille positionin
function blockPosition(){
arInd--;

//Divien rivitys
if(arInd == 0){
    topPos = topPos + 10;
    leftPos = leftPos - 360;
    arInd = 4;
}else{

};
}


//Mappisäätöö
var mapinIndex = 0;
var mapinInnerIndex = 0;
var playerArray = 0;
var playerIndex = 0;

//Pitäs updatee rahan näytöl
function MoneyUpdate(){
document.getElementById("Money").innerHTML = "Money: " + Money;

}

//////////////////////////////////////////////////
//Mapin generointi
function timeLoad(){

mapinIndex = 0;
mapinInnerIndex = 0;
playerArray = 0;
playerIndex = 0;


mapLayArr.forEach(e => {

//Tarkistaa löytyyks kyseunen merkki map arrayst
for(var joku = 0; joku <= 8; joku++){
var wkö = mapLayArr[mapinInnerIndex][joku].includes(w);
var okö = mapLayArr[mapinInnerIndex][joku].includes(o);
var pkö = mapLayArr[mapinInnerIndex][joku].includes(p);
var ekö = mapLayArr[mapinInnerIndex][joku].includes("e");
var ckö = mapLayArr[mapinInnerIndex][joku].includes("c");
var o1kö = mapLayArr[mapinInnerIndex][joku].includes(o1);
var e1kö = mapLayArr[mapinInnerIndex][joku].includes(e1);
var w1kö = mapLayArr[mapinInnerIndex][joku].includes(w1);

leftPos = leftPos + 10;

//switch kattoo mikä blokki kyseessä
switch(true){

//Kattoo löytyyks seinä 
case wkö:

// var a div
const newDiv = document.createElement("div");
//give an id to a div
newDiv.id = "Array" + mapinInnerIndex + "Block" + mapinIndex;
// class a div
newDiv.className = "Wall";

//Give div a position
newDiv.style.position = "absolute";
newDiv.style.left = leftPos + 'px';
newDiv.style.top = topPos + 'px';

//Create a div
document.getElementById("yolo").appendChild(newDiv);
//personal id a div
mapinIndex++;


break;
/////////////// (samaa)
case w1kö:

const newDiv6 = document.createElement("div");
newDiv6.id = "Array" + mapinInnerIndex + "Block" + mapinIndex;
newDiv6.className = "w1Shadow";

newDiv6.style.position = "absolute";
newDiv6.style.left = leftPos + 'px';
newDiv6.style.top = topPos + 'px';

document.getElementById("yolo").appendChild(newDiv6);
mapinIndex++;


break;
//Kattoo löytyyks empty space
case okö:

const newDiv1 = document.createElement("div");
newDiv1.id = "Array" + mapinInnerIndex + "Block" + mapinIndex;
newDiv1.className = "Floor";

newDiv1.style.position = "absolute";
newDiv1.style.left = leftPos + 'px';
newDiv1.style.top = topPos + 'px';

document.getElementById("yolo").appendChild(newDiv1);
mapinIndex++;


break;

//antaa varjon ( ei toiminu :c )
case o1kö:

const newDiv5 = document.createElement("div");
newDiv5.id = "Array" + mapinInnerIndex + "Block" + mapinIndex;
newDiv5.className = "o1Shadow";

newDiv5.style.position = "absolute";
newDiv5.style.left = leftPos + 'px';
newDiv5.style.top = topPos + 'px';

document.getElementById("yolo").appendChild(newDiv5);
mapinIndex++;


break;
//Kattoo löytyyks Player
case pkö:

const newDiv2 = document.createElement("div");
newDiv2.id = "Player";
newDiv2.className = "Player";

newDiv2.style.position = "absolute";
newDiv2.style.left = leftPos + 'px';
newDiv2.style.top = topPos + 'px';

//save cpu
PlayerPositionArray = mapinInnerIndex;
PlayerPositionIndex = joku;


document.getElementById("yolo").appendChild(newDiv2);


break;

//Kattoo löytyyks BasicEnemy
case ekö:

const newDiv3 = document.createElement("div");
newDiv3.id = "Enemy";
newDiv3.className = "Enemy";

newDiv3.style.position = "absolute";
newDiv3.style.left = leftPos + 'px';
newDiv3.style.top = topPos + 'px';

document.getElementById("yolo").appendChild(newDiv3);


break;
/////////////
case e1kö:

const newDiv7 = document.createElement("div");
newDiv7.id = "Enemy";
newDiv7.className = "Enemy";

newDiv7.style.position = "absolute";
newDiv7.style.left = leftPos + 'px';
newDiv7.style.top = topPos + 'px';

document.getElementById("yolo").appendChild(newDiv7);


break;

//////////
//coin?
case ckö:

const newDiv4 = document.createElement("div");
newDiv4.id = "Coin";
newDiv4.className = "Coins";

newDiv4.style.position = "absolute";
newDiv4.style.left = leftPos + 'px';
newDiv4.style.top = topPos + 'px';


document.getElementById("yolo").appendChild(newDiv4);



break;
}

}

blockPosition();

mapinInnerIndex++;
} );


}
//////////////////////////////////////////////////



var mapinInnerIndex2 = 0;

function findEnemySpot(){
mapinInnerIndex2 = 0;
mapLayArr.forEach(e => {
for(var joku2 = 0; joku2 <= 8; joku2++){
var ekö2 = mapLayArr[mapinInnerIndex2][joku2].includes("e");

if(ekö2 == true){
//Roskaa et sais BasicEnemyn liikkuu
eArrPos = mapinInnerIndex2;
eInnerArrPos = joku2;
ePosArr.push(eArrPos);
ePosArr.push(eInnerArrPos);


}else{

}
}

mapinInnerIndex2++;
});


}


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//Functiot taiston aloittamiseksi
function startBattleLeft(){


if(mapLayArr[PlayerPositionArray][PlayerPositionIndex - 1] == "e"){
clearInterval(enemySetInterval);
//Enemy Stats
enemyHp = 3;
enemyDmg = 1;
BattleOn = true;
console.log("BattleOn = On");

//Create Battlescreen div
const battleDiv = document.createElement("div");
battleDiv.id = "Battle"
battleDiv.className = "Battle";
document.getElementById("mother").appendChild(battleDiv);

//Text to battlescreen
const h3BattleDiv = document.createElement("h3")
h3BattleDiv.id = "h3Battle"
h3BattleDiv.className = "h3Battle"
document.getElementById("Battle").appendChild(h3BattleDiv)

document.getElementById("h3Battle").innerHTML = " This will be the battle screen"

//Enemy Health
const h3BattleDiv2 = document.createElement("p")
h3BattleDiv2.id = "EnemyHealth"
h3BattleDiv2.className = "PBattle"
document.getElementById("Battle").appendChild(h3BattleDiv2)

document.getElementById("EnemyHealth").innerHTML = " Enemy Hp: " + enemyHp;

//Button to attack
const attBtnDiv = document.createElement("button");
attBtnDiv.id = "AttBtn"
attBtnDiv.className = "BattleBtn"
document.getElementById("Battle").appendChild(attBtnDiv)
document.getElementById("AttBtn").innerHTML = "Attack"
document.getElementById("AttBtn").addEventListener("click", playerAttack);
}else{


}
}
function startBattleRight(){


if(mapLayArr[PlayerPositionArray][PlayerPositionIndex + 1] == "e"){
clearInterval(enemySetInterval);
enemyHp = 3;
enemyDmg = 1;
BattleOn = true;
console.log("BattleOn = On");

const battleDiv = document.createElement("div");
battleDiv.id = "Battle"
battleDiv.className = "Battle";
document.getElementById("mother").appendChild(battleDiv);
    
const h3BattleDiv = document.createElement("h3")
h3BattleDiv.id = "h3Battle"
h3BattleDiv.className = "h3Battle"
document.getElementById("Battle").appendChild(h3BattleDiv)

document.getElementById("h3Battle").innerHTML = " This will be the battle screen"
//
const h3BattleDiv2 = document.createElement("p")
h3BattleDiv2.id = "EnemyHealth"
h3BattleDiv2.className = "PBattle"
document.getElementById("Battle").appendChild(h3BattleDiv2)

document.getElementById("EnemyHealth").innerHTML = " Enemy Hp: " + enemyHp;
//    
const attBtnDiv = document.createElement("button");
attBtnDiv.id = "AttBtn"
attBtnDiv.className = "BattleBtn"
document.getElementById("Battle").appendChild(attBtnDiv)
document.getElementById("AttBtn").innerHTML = "Attack"
document.getElementById("AttBtn").addEventListener("click", playerAttack);
}else{
           
}
}

function startBattleUp(){


if(mapLayArr[PlayerPositionArray - 4][PlayerPositionIndex] == "e"){
clearInterval(enemySetInterval);
enemyHp = 3;
enemyDmg = 1;
BattleOn = true;
console.log("BattleOn = On");

const battleDiv = document.createElement("div");
battleDiv.id = "Battle"
battleDiv.className = "Battle";
document.getElementById("mother").appendChild(battleDiv);
    
const h3BattleDiv = document.createElement("h3")
h3BattleDiv.id = "h3Battle"
h3BattleDiv.className = "h3Battle"
document.getElementById("Battle").appendChild(h3BattleDiv)

document.getElementById("h3Battle").innerHTML = " This will be the battle screen"
//
const h3BattleDiv2 = document.createElement("p")
h3BattleDiv2.id = "EnemyHealth"
h3BattleDiv2.className = "PBattle"
document.getElementById("Battle").appendChild(h3BattleDiv2)

document.getElementById("EnemyHealth").innerHTML = " Enemy Hp: " + enemyHp;
//    
const attBtnDiv = document.createElement("button");
attBtnDiv.id = "AttBtn"
attBtnDiv.className = "BattleBtn"
document.getElementById("Battle").appendChild(attBtnDiv)
document.getElementById("AttBtn").innerHTML = "Attack"
document.getElementById("AttBtn").addEventListener("click", playerAttack);
}else{
           
}
}

function startBattleDown(){


if(mapLayArr[PlayerPositionArray + 4][PlayerPositionIndex] == "e"){
clearInterval(enemySetInterval);
enemyHp = 3;
enemyDmg = 1;
BattleOn = true;
console.log("BattleOn = On");

const battleDiv = document.createElement("div");
battleDiv.id = "Battle"
battleDiv.className = "Battle";
document.getElementById("mother").appendChild(battleDiv);
    
const h3BattleDiv = document.createElement("h3")
h3BattleDiv.id = "h3Battle"
h3BattleDiv.className = "h3Battle"
document.getElementById("Battle").appendChild(h3BattleDiv)

document.getElementById("h3Battle").innerHTML = " This will be the battle screen"
//
const h3BattleDiv2 = document.createElement("p")
h3BattleDiv2.id = "EnemyHealth"
h3BattleDiv2.className = "PBattle"
document.getElementById("Battle").appendChild(h3BattleDiv2)

document.getElementById("EnemyHealth").innerHTML = " Enemy Hp: " + enemyHp;
//    
const attBtnDiv = document.createElement("button");
attBtnDiv.id = "AttBtn"
attBtnDiv.className = "BattleBtn"
document.getElementById("Battle").appendChild(attBtnDiv)
document.getElementById("AttBtn").innerHTML = "Attack"
document.getElementById("AttBtn").addEventListener("click", playerAttack);
}else{
           
}
}

//when enemy walks at you
function startBattleSS(){

clearInterval(enemySetInterval);
enemyHp2 = 3;
enemyDmg = 1;
BattleOn = true;
console.log("BattleOn = On");

const battleDiv = document.createElement("div");
battleDiv.id = "Battle"
battleDiv.className = "Battle";
document.getElementById("mother").appendChild(battleDiv);
    
const h3BattleDiv = document.createElement("h3")
h3BattleDiv.id = "h3Battle"
h3BattleDiv.className = "h3Battle"
document.getElementById("Battle").appendChild(h3BattleDiv)

document.getElementById("h3Battle").innerHTML = " This will be the battle screen"
//
const h3BattleDiv2 = document.createElement("p")
h3BattleDiv2.id = "EnemyHealth"
h3BattleDiv2.className = "PBattle"
document.getElementById("Battle").appendChild(h3BattleDiv2)

document.getElementById("EnemyHealth").innerHTML = " Enemy Hp: " + enemyHp2;
//    
const attBtnDiv = document.createElement("button");
attBtnDiv.id = "AttBtn"
attBtnDiv.className = "BattleBtn"
document.getElementById("Battle").appendChild(attBtnDiv)
document.getElementById("AttBtn").innerHTML = "Attack"
document.getElementById("AttBtn").addEventListener("click", playerAttack2);
}
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////




//Functio poistamaan kaikki divit lopuks ja resettaa blockin positio laitteen
function deleteDivs(){
document.getElementById("yolo").innerHTML = "";

leftPos = 300;
topPos = 300;
arInd = 4;
}




///////////////////////////////////////////////////////////////////////////
//Functiot liikkumiselle
function pressLeft(){

if(mapLayArr[PlayerPositionArray][PlayerPositionIndex - 1] == "e"){
startBattleLeft();
}else{
if(mapLayArr[PlayerPositionArray][PlayerPositionIndex - 1] == w){

}else if (mapLayArr[PlayerPositionArray][PlayerPositionIndex - 1] == c){
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex-1,1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex-1,0,o);
Money = Money + 10;
MoneyUpdate();
deleteDivs();
timeLoad();
}
else if(PlayerPositionIndex == 0){
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,0,o);
mapLayArr[ PlayerPositionArray - 1 ].splice(8,1);
mapLayArr[ PlayerPositionArray - 1 ].splice(8,0,p);
deleteDivs();
timeLoad();
}
else{
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex-1,0,p);
    
deleteDivs();
timeLoad();
}
}
}
    
function pressRight(){


if(mapLayArr[PlayerPositionArray][PlayerPositionIndex + 1] == "e"){
startBattleRight();
}else{
if(mapLayArr[PlayerPositionArray][PlayerPositionIndex + 1] == w){

}else if (mapLayArr[PlayerPositionArray][PlayerPositionIndex + 1] == c){
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex+1,1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex+1,0,o);
Money = Money + 10;
MoneyUpdate();
deleteDivs();
timeLoad();
}
else if(PlayerPositionIndex == 8){
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,0,o);
mapLayArr[ PlayerPositionArray + 1 ].splice(0,1);
mapLayArr[ PlayerPositionArray + 1 ].splice(0,0,p);
deleteDivs();
timeLoad();
}

else{
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex+1,0,p);
    
deleteDivs();
timeLoad();
}
}
}  
    
function pressUp(){     


if(mapLayArr[PlayerPositionArray - 4][PlayerPositionIndex] == "e"){
startBattleUp();
}else{

if(mapLayArr[PlayerPositionArray - 4][PlayerPositionIndex] == w){

}else if (mapLayArr[PlayerPositionArray - 4][PlayerPositionIndex] == c){
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,0,o);
mapLayArr[PlayerPositionArray - 4].splice(PlayerPositionIndex,1);
mapLayArr[PlayerPositionArray - 4].splice(PlayerPositionIndex,0,p);
Money = Money + 10;
MoneyUpdate();
deleteDivs();
timeLoad();
}
else{
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,0,o);
mapLayArr[PlayerPositionArray - 4].splice(PlayerPositionIndex,1);
mapLayArr[PlayerPositionArray - 4].splice(PlayerPositionIndex,0,p);
    
deleteDivs();
timeLoad();
}
}
}

function pressDown(){

if(mapLayArr[PlayerPositionArray + 4][PlayerPositionIndex] == "e"){
startBattleDown();
}else{
                
if(mapLayArr[PlayerPositionArray + 4][PlayerPositionIndex] == w){

}else if (mapLayArr[PlayerPositionArray + 4][PlayerPositionIndex] == c){
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,0,o);
mapLayArr[PlayerPositionArray + 4].splice(PlayerPositionIndex,1);
mapLayArr[PlayerPositionArray + 4].splice(PlayerPositionIndex,0,p);
Money = Money + 10;
MoneyUpdate();
deleteDivs();
timeLoad();
}
else{
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex,0,o);
mapLayArr[PlayerPositionArray + 4].splice(PlayerPositionIndex,1);
mapLayArr[PlayerPositionArray + 4].splice(PlayerPositionIndex,0,p);
    
deleteDivs();
timeLoad();
}
}
}
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////
//BasicEnemy Movement
var pulsOne = 0;
var pulsTwo = 1;
var eConArr = 0;
var eConvArrInd = 0;
var enemyMoveStage = 0;

//Fixaa dublication ongelman
function eFixDown(){
if(mapLayArr[eConArr][eConvArrInd].includes(e)){
    mapLayArr[eConArr].splice(eConvArrInd, 1);
    mapLayArr[eConArr].splice(eConvArrInd, 0, o);
}else{

}
}
function eFixLeft(){
if(mapLayArr[eConArr][eConvArrInd].includes(e)){
    mapLayArr[eConArr].splice(eConvArrInd, 1);
    mapLayArr[eConArr].splice(eConvArrInd, 0, o);
}else{

}
}
function eFixUp(){
if(mapLayArr[eConArr][eConvArrInd].includes(e)){
    mapLayArr[eConArr].splice(eConvArrInd, 1);
    mapLayArr[eConArr].splice(eConvArrInd, 0, o);
}else{

}
}
function eFixRight(){
if(mapLayArr[eConArr][eConvArrInd].includes(e)){
    mapLayArr[eConArr].splice(eConvArrInd, 1);
    mapLayArr[eConArr].splice(eConvArrInd, 0, o);
}else{

}
}


////////////////////
////////////////////
function basicEnemyMovement(){
//To fix enemy movement
var insideClock = ePosArr.length;

for(let i = ePosArr.length; i > 0; i--){

eConArr = ePosArr[pulsOne];
eConvArrInd = ePosArr[pulsTwo];

console.log("arr = " + eConArr);
console.log("ind = " + eConvArrInd);
console.log("-----------------------------------");


if(enemyMoveStage == 0){
   
   if((mapLayArr[eConArr + 4][eConvArrInd] == w)){

   }else if(mapLayArr[eConArr + 4][eConvArrInd] == p || mapLayArr[eConArr + 8][eConvArrInd] == p){
    PlayerSpotted = true;
    //detectPlayer();
    mapLayArr[eConArr].splice(eConvArrInd, 1);
    mapLayArr[eConArr].splice(eConvArrInd, 0, o);
    mapLayArr[eConArr + 4 ].splice(eConvArrInd, 1);
    mapLayArr[eConArr + 4 ].splice(eConvArrInd, 0, e);
   }
   else{
    mapLayArr[eConArr].splice(eConvArrInd, 1);
    mapLayArr[eConArr].splice(eConvArrInd, 0, o);
    mapLayArr[eConArr + 4 ].splice(eConvArrInd, 1);
    mapLayArr[eConArr + 4 ].splice(eConvArrInd, 0, e);
    
    pulsOne = pulsOne + 2;
    pulsTwo = pulsTwo + 2;
    
    eFixDown();

    i--;
   }
}
else if(enemyMoveStage == 1){

    if((mapLayArr[eConArr][eConvArrInd -1] == w)){

    }else if(mapLayArr[eConArr][eConvArrInd -1] == p || mapLayArr[eConArr][eConvArrInd - 2] == p){
    PlayerSpotted = true;
    //detectPlayer();
    mapLayArr[eConArr].splice(eConvArrInd, 1);
    mapLayArr[eConArr].splice(eConvArrInd, 0, o);
    mapLayArr[eConArr].splice(eConvArrInd -1, 1);
    mapLayArr[eConArr].splice(eConvArrInd -1, 0, e);
   }
    else{
    mapLayArr[eConArr].splice(eConvArrInd, 1);
    mapLayArr[eConArr].splice(eConvArrInd, 0, o);
    mapLayArr[eConArr].splice(eConvArrInd -1, 1);
    mapLayArr[eConArr].splice(eConvArrInd -1, 0, e);
    
    
    pulsOne = pulsOne + 2;
    pulsTwo = pulsTwo + 2;
    
    eFixLeft();

    i--;
    }
}
else if(enemyMoveStage == 2){

    if((mapLayArr[eConArr - 4][eConvArrInd] == w)){

    }else if(mapLayArr[eConArr - 4][eConvArrInd] == p || mapLayArr[eConArr - 8][eConvArrInd] == p){
    PlayerSpotted = true;
    //detectPlayer();
    mapLayArr[eConArr].splice(eConvArrInd, 1);
    mapLayArr[eConArr].splice(eConvArrInd, 0, o);
    mapLayArr[eConArr - 4 ].splice(eConvArrInd, 1);
    mapLayArr[eConArr - 4 ].splice(eConvArrInd, 0, e);
   }
    else{
    mapLayArr[eConArr].splice(eConvArrInd, 1);
    mapLayArr[eConArr].splice(eConvArrInd, 0, o);
    mapLayArr[eConArr - 4 ].splice(eConvArrInd, 1);
    mapLayArr[eConArr - 4 ].splice(eConvArrInd, 0, e);
    
    pulsOne = pulsOne + 2;
    pulsTwo = pulsTwo + 2;
    
    eFixUp();

    i--;
    }
}
else if(enemyMoveStage == 3){

    if((mapLayArr[eConArr][eConvArrInd + 1] == w)){

    }else if(mapLayArr[eConArr][eConvArrInd + 1] == p || mapLayArr[eConArr][eConvArrInd + 2] == p){
    PlayerSpotted = true;
    //detectPlayer();
    mapLayArr[eConArr].splice(eConvArrInd, 1);
    mapLayArr[eConArr].splice(eConvArrInd, 0, o);
    mapLayArr[eConArr].splice(eConvArrInd + 1, 1);
    mapLayArr[eConArr].splice(eConvArrInd + 1, 0, e);

    
   }
    else{
    

    mapLayArr[eConArr].splice(eConvArrInd, 1);
    mapLayArr[eConArr].splice(eConvArrInd, 0, o);
    mapLayArr[eConArr].splice(eConvArrInd + 1, 1);
    mapLayArr[eConArr].splice(eConvArrInd + 1, 0, e);
    
    
    pulsOne = pulsOne + 2;
    pulsTwo = pulsTwo + 2;
    
    i--;

    eFixRight();

    insideClock = insideClock - 2;

    if(insideClock <= 0 )
    enemyMoveStage = -1;
    }

}
else {

}
}
console.log(ePosArr);
console.log(enemyMoveStage);

detectPlayer();

pulsOne = 0;
pulsTwo = 1;

ePosArr = [];
enemyMoveStage++;
PlayerSpotted = false;

}
////////////////////
////////////////////


function moveEnemys(){
CheckMode();
findEnemySpot();
basicEnemyMovement();
deleteDivs();
timeLoad();

}

//To make enemys stop
var enemySetInterval = setInterval(moveEnemys, 2500);

function CheckMode(){
if(BattleOn == true){
clearInterval(enemySetInterval);

}else{
enemySetInterval;
}
}

var PlayerDmgCon = 0;

function playerAttack(){
var playerDmg = Math.floor(Math.random() * 8);
console.log(playerDmg);
if(playerDmg == 1){
PlayerDmgCon = 0;
}else if(playerDmg == 2){
PlayerDmgCon = 1;
}else if(playerDmg == 3){
PlayerDmgCon = 1;  
}else if(playerDmg == 4){
PlayerDmgCon = 2;  
}else if(playerDmg == 5){
PlayerDmgCon = 2;  
}else if(playerDmg == 6){
PlayerDmgCon = 2;  
}else if(playerDmg == 7){
PlayerDmgCon = 3;  
}else{
PlayerDmgCon = 0;  
}


enemyHp = enemyHp - PlayerDmgCon;
document.getElementById("EnemyHealth").innerHTML = " Enemy Hp: " + enemyHp;
HP = HP - enemyDmg;
CheckPlayerHp();
if(enemyHp <= 0){
BattleOn = false;
console.log("BattleOn = Off");
document.getElementById("mother").innerHTML = "";
enemySetInterval = setInterval(moveEnemys, 2500);
deleteEnemy();
deleteDivs();
timeLoad();

}

}


function playerAttack2(){
var playerDmg = Math.floor(Math.random() * 8);
console.log(playerDmg);
if(playerDmg == 1){
PlayerDmgCon = 0;
}else if(playerDmg == 2){
PlayerDmgCon = 1;
}else if(playerDmg == 3){
PlayerDmgCon = 1;  
}else if(playerDmg == 4){
PlayerDmgCon = 2;  
}else if(playerDmg == 5){
PlayerDmgCon = 2;  
}else if(playerDmg == 6){
PlayerDmgCon = 2;  
}else if(playerDmg == 7){
PlayerDmgCon = 3;  
}else{
PlayerDmgCon = 0;  
}

console.log("Con = " + PlayerDmgCon);
enemyHp2 = enemyHp2 - PlayerDmgCon;
document.getElementById("EnemyHealth").innerHTML = " Enemy Hp: " + enemyHp2;
HP = HP - enemyDmg;
CheckPlayerHp();
if(enemyHp2 <= 0){
BattleOn = false;
console.log("BattleOn = Off");
document.getElementById("mother").innerHTML = "";
enemySetInterval = setInterval(moveEnemys, 2500);
deleteEnemy();
deleteDivs();
timeLoad();

}

}
//////////////////////////////////////////////////


/////////////////////////
//To change hp on screen
var KymppiHp = false;
var YsiHp = false;
var KasiHp = false;
var SeiskaHp = false;
var KuusHp = false;
var ViisHp = false;
var NeljäHp = false;
var KolmeHp = false;
var KaksHp = false;
var YksHp = false;

function CheckPlayerHp(){

document.getElementById("Health").innerHTML = "";

if(HP == 10){
KymppiHp = true;
}else if(HP == 9){
YsiHp = true;
}else if(HP == 8){
KasiHp = true;
}else if(HP == 7){
SeiskaHp = true;
}else if(HP == 6){
KuusHp = true;
}else if(HP == 5){
ViisHp = true;
}else if(HP == 4){
NeljäHp = true;
}else if(HP == 3){
KolmeHp = true;
}else if(HP == 2){
KaksHp = true;
}else if(HP == 1){
YksHp = true;
}else{

}


switch(true){

case KymppiHp:
let Heart105 = document.createElement("img")
Heart105.id = "Heart5"
Heart105.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart105);
//////
let Heart104 = document.createElement("img")
Heart104.id = "Heart4"
Heart104.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart104);
//////
let Heart103 = document.createElement("img")
Heart103.id = "Heart4"
Heart103.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart103);
//////
let Heart102 = document.createElement("img")
Heart102.id = "Heart4"
Heart102.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart102);
//////
let Heart101 = document.createElement("img")
Heart101.id = "Heart4"
Heart101.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart101);
break;

case YsiHp:
let Heart95 = document.createElement("img")
Heart95.id = "Heart5"
Heart95.src = "../assets/HalfHpHeart.png"
document.getElementById("Health").appendChild(Heart95);
//////
let Heart94 = document.createElement("img")
Heart94.id = "Heart4"
Heart94.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart94);
//////
let Heart93 = document.createElement("img")
Heart93.id = "Heart3"
Heart93.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart93);
//////
let Heart92 = document.createElement("img")
Heart92.id = "Heart2"
Heart92.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart92);
//////
let Heart91 = document.createElement("img")
Heart91.id = "Heart1"
Heart91.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart91);
break;

case KasiHp:
let Heart85 = document.createElement("img")
Heart85.id = "Heart5"
Heart85.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart85);
//////
let Heart84 = document.createElement("img")
Heart84.id = "Heart4"
Heart84.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart84);
//////
let Heart83 = document.createElement("img")
Heart83.id = "Heart3"
Heart83.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart83);
//////
let Heart82 = document.createElement("img")
Heart82.id = "Heart2"
Heart82.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart82);
//////
let Heart81 = document.createElement("img")
Heart81.id = "Heart1"
Heart81.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart81);
break;

case SeiskaHp:
let Heart75 = document.createElement("img")
Heart75.id = "Heart5"
Heart75.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart75);
//////
let Heart74 = document.createElement("img")
Heart74.id = "Heart4"
Heart74.src = "../assets/HalfHpHeart.png"
document.getElementById("Health").appendChild(Heart74);
//////
let Heart73 = document.createElement("img")
Heart73.id = "Heart3"
Heart73.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart73);
//////
let Heart72 = document.createElement("img")
Heart72.id = "Heart2"
Heart72.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart72);
//////
let Heart71 = document.createElement("img")
Heart71.id = "Heart1"
Heart71.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart71);
break;

case KuusHp:
let Heart65 = document.createElement("img")
Heart65.id = "Heart5"
Heart65.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart65);
//////
let Heart64 = document.createElement("img")
Heart64.id = "Heart4"
Heart64.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart64);
//////
let Heart63 = document.createElement("img")
Heart63.id = "Heart3"
Heart63.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart63);
//////
let Heart62 = document.createElement("img")
Heart62.id = "Heart2"
Heart62.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart62);
//////
let Heart61 = document.createElement("img")
Heart61.id = "Heart1"
Heart61.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart61);
break;

case ViisHp:
let Heart55 = document.createElement("img")
Heart55.id = "Heart5"
Heart55.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart55);
//////
let Heart54 = document.createElement("img")
Heart54.id = "Heart4"
Heart54.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart54);
//////
let Heart53 = document.createElement("img")
Heart53.id = "Heart3"
Heart53.src = "../assets/HalfHpHeart.png"
document.getElementById("Health").appendChild(Heart53);
//////
let Heart52 = document.createElement("img")
Heart52.id = "Heart2"
Heart52.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart52);
//////
let Heart51 = document.createElement("img")
Heart51.id = "Heart1"
Heart51.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart51);
break;

case NeljäHp:
let Heart45 = document.createElement("img")
Heart45.id = "Heart5"
Heart45.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart45);
//////
let Heart44 = document.createElement("img")
Heart44.id = "Heart4"
Heart44.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart44);
//////
let Heart43 = document.createElement("img")
Heart43.id = "Heart3"
Heart43.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart43);
//////
let Heart42 = document.createElement("img")
Heart42.id = "Heart2"
Heart42.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart42);
//////
let Heart41 = document.createElement("img")
Heart41.id = "Heart1"
Heart41.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart41);
break;

case KolmeHp:
let Heart35 = document.createElement("img")
Heart35.id = "Heart5"
Heart35.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart35);
//////
let Heart34 = document.createElement("img")
Heart34.id = "Heart4"
Heart34.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart34);
//////
let Heart33 = document.createElement("img")
Heart33.id = "Heart3"
Heart33.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart33);
//////
let Heart32 = document.createElement("img")
Heart32.id = "Heart2"
Heart32.src = "../assets/HalfHpHeart.png"
document.getElementById("Health").appendChild(Heart32);
//////
let Heart31 = document.createElement("img")
Heart31.id = "Heart1"
Heart31.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart31);
break;

case KaksHp:
let Heart25 = document.createElement("img")
Heart25.id = "Heart5"
Heart25.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart25);
//////
let Heart24 = document.createElement("img")
Heart24.id = "Heart4"
Heart24.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart24);
//////
let Heart23 = document.createElement("img")
Heart23.id = "Heart3"
Heart23.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart23);
//////
let Heart22 = document.createElement("img")
Heart22.id = "Heart2"
Heart22.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart22);
//////
let Heart21 = document.createElement("img")
Heart21.id = "Heart1"
Heart21.src = "../assets/FullHpHeart.png"
document.getElementById("Health").appendChild(Heart21);
break;

case YksHp:
let Heart15 = document.createElement("img")
Heart15.id = "Heart5"
Heart15.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart15);
//////
let Heart14 = document.createElement("img")
Heart14.id = "Heart4"
Heart14.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart14);
//////
let Heart13 = document.createElement("img")
Heart13.id = "Heart3"
Heart13.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart13);
//////
let Heart12 = document.createElement("img")
Heart12.id = "Heart2"
Heart12.src = "../assets/EmptyHpHeart.png"
document.getElementById("Health").appendChild(Heart12);
//////
let Heart11 = document.createElement("img")
Heart11.id = "Heart1"
Heart11.src = "../assets/HalfHpHeart.png"
document.getElementById("Health").appendChild(Heart11);
break;

}
KymppiHp = false;
YsiHp = false;
KasiHp = false;
SeiskaHp = false;
KuusHp = false;
ViisHp = false;
NeljäHp = false;
KolmeHp = false;
KaksHp = false;
YksHp = false;
}
/////////////////////////

function deleteEnemy(){

if (mapLayArr[PlayerPositionArray][PlayerPositionIndex + 1].includes("e")){
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex +1, 1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex +1, 0, o);
}else if (mapLayArr[PlayerPositionArray][PlayerPositionIndex - 1].includes("e")){
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex -1, 1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex -1, 0, o);
}else if (mapLayArr[PlayerPositionArray + 4][PlayerPositionIndex].includes("e")){
mapLayArr[PlayerPositionArray + 4].splice(PlayerPositionIndex, 1);
mapLayArr[PlayerPositionArray + 4].splice(PlayerPositionIndex, 0, o);
}else if (mapLayArr[PlayerPositionArray - 4][PlayerPositionIndex].includes("e")){
mapLayArr[PlayerPositionArray - 4].splice(PlayerPositionIndex, 1);
mapLayArr[PlayerPositionArray - 4].splice(PlayerPositionIndex, 0, o);
}else{

}
}


/*
function deleteEnemy2(){

if (mapLayArr[PlayerPositionArray][PlayerPositionIndex + 2].includes("e")){
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex +2, 1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex +2, 0, o);
}else if (mapLayArr[PlayerPositionArray][PlayerPositionIndex - 2].includes("e")){
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex -2, 1);
mapLayArr[PlayerPositionArray].splice(PlayerPositionIndex -2, 0, o);
}else if (mapLayArr[PlayerPositionArray + 8][PlayerPositionIndex].includes("e")){
mapLayArr[PlayerPositionArray + 8].splice(PlayerPositionIndex, 1);
mapLayArr[PlayerPositionArray + 8].splice(PlayerPositionIndex, 0, o);
}else if (mapLayArr[PlayerPositionArray - 8][PlayerPositionIndex].includes("e")){
mapLayArr[PlayerPositionArray - 8].splice(PlayerPositionIndex, 1);
mapLayArr[PlayerPositionArray - 8].splice(PlayerPositionIndex, 0, o);
}else{

}
}

*/

function detectPlayer(){
if(PlayerSpotted == true){
console.log("player spotted");
startBattleSS();
}else{

}
}

