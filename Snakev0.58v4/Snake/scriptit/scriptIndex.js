var easy = false;
var normal = true;
var hard = false;


var appendDif = document.getElementById("vaikeusP");




function difEasy(){
easy = true;
normal = false;
hard = false;
document.getElementById("vaikeusP").innerHTML = "Easy";
}

function difNorm(){
easy = false;
normal = true;
hard = false;
document.getElementById("vaikeusP").innerHTML = "Normal";
}

function difHard(){
easy = false;
normal = false;
hard = true;
document.getElementById("vaikeusP").innerHTML = "Hard";
}

var currentDificulty = 1;
function minusClick(){
if(currentDificulty > 0){
currentDificulty--;
console.log(currentDificulty);
}

switch(true){

case(currentDificulty == 0):
difEasy();
console.log("Easy");
break;

case(currentDificulty == 1):
difNorm();
console.log("Normal");
break;
case(currentDificulty == 2):
difHard();
console.log("Hard");
break;

}

}

function plusClick(){
if(currentDificulty < 2){
currentDificulty++;
console.log(currentDificulty);
}
switch(true){

case(currentDificulty == 0):
difEasy();
console.log("Easy");
break;

case(currentDificulty == 1):
difNorm();
console.log("Normal");
break;
case(currentDificulty == 2):
difHard();
console.log("Hard");
break;

}

}

