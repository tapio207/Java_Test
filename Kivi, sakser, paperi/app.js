window.onload = function(){
var Tasapeli = false;
var PlayerWin = false;
var BotWin = false;

//arrayt tietokoneelle
var rock = [document.getElementById("kivi"), 0, false];
var sakset = [document.getElementById("sakset"), 1, false];
var paperi = [document.getElementById("paperi"), 2, false];

//arrayt pelaajalle
var rockPlayer = [document.getElementById("kivi"), false];
var saksetPlayer = [document.getElementById("sakset"), false];
var paperiPlayer = [document.getElementById("paperi"), false];


document.getElementById("kivi").addEventListener("click", kiviClick);
document.getElementById("sakset").addEventListener("click", saksetClick);
document.getElementById("paperi").addEventListener("click", paperiClick);



function botinValinta(){
//Luo random numeron jonka mukaan vastustaja valitsee elementtinsä
var ranNum = Math.floor(Math.random() * 3);
console.log(ranNum);
    

switch(ranNum){


case rock[1]:
    rock.pop();
    rock.push(true);
    document.getElementById("botValinta").innerHTML = "Rock"

break;

case sakset[1]:
    sakset.pop();
    sakset.push(true);
    document.getElementById("botValinta").innerHTML = "Sakset"

break;

case paperi[1]:
    paperi.pop();
    paperi.push(true);
    document.getElementById("botValinta").innerHTML = "Paperi"

break;


}

}

function tspl(){
document.getElementById("text").innerHTML = "Tasapeli";

}
function btw(){
document.getElementById("text").innerHTML = "BotWin"

}
function plw(){
document.getElementById("text").innerHTML = "PlayerWin"

}

function clear(){
    rock.pop();
    rock.push(false);
    sakset.pop();
    sakset.push(false);
    paperi.pop();
    paperi.push(false);

    rockPlayer.pop();
    rockPlayer.push(false);
    saksetPlayer.pop();
    saksetPlayer.push(false);
    paperiPlayer.pop();
    paperiPlayer.push(false);

    PlayerWin = false;
    BotWin = false;
    Tasapeli = false;
}




function checkStatus(){

switch(true){

case rock[2]:
if(rockPlayer[1] == true){
Tasapeli = true;
}else if (saksetPlayer[1] == true){
BotWin = true;
}else{
PlayerWin = true;
}
break;

case sakset[2]:
if(rockPlayer[1] == true){
PlayerWin = true;
}else if (saksetPlayer[1] == true){
Tasapeli = true;
}else{
BotWin = true;
}
break;

case paperi[2]:
if(rockPlayer[1] == true){
BotWin = true;
}else if (saksetPlayer[1] == true){
PlayerWin = true;
}else{
Tasapeli = true;
}        
break;
}


switch(true){

case Tasapeli:
setTimeout(tspl, 1000);
break;

case BotWin:
setTimeout(btw, 1000);
break;

case PlayerWin:
setTimeout(plw, 1000);
break;


}

console.log("tasa = " + Tasapeli);
console.log("bot = " + BotWin);
console.log("player = " + PlayerWin);
    
}

    


function kiviClick(){
clear();
rockPlayer.pop();
rockPlayer.push(true);
botinValinta();
checkStatus();


console.log("rock = " +rock);
console.log("sakset = " +sakset);
console.log("paperi = " +paperi);

console.log("rockPlayer = " +rockPlayer);
console.log("saksetPlayer = " +saksetPlayer);
console.log("paperiPlayer = " +paperiPlayer);


}

function saksetClick(){
clear();
saksetPlayer.pop();
saksetPlayer.push(true);
botinValinta();
checkStatus();

console.log("rock = " +rock);
console.log("sakset = " +sakset);
console.log("paperi = " +paperi);

console.log("rockPlayer = " +rockPlayer);
console.log("saksetPlayer = " +saksetPlayer);
console.log("paperiPlayer = " +paperiPlayer);

}

function paperiClick(){
clear();
paperiPlayer.pop();
paperiPlayer.push(true);
botinValinta();
checkStatus();

console.log("rock = " +rock);
console.log("sakset = " +sakset);
console.log("paperi = " +paperi);

console.log("rockPlayer = " +rockPlayer);
console.log("saksetPlayer = " +saksetPlayer);
console.log("paperiPlayer = " +paperiPlayer);

}



}





