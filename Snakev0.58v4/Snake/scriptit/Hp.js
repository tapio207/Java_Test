///////////////////////////////////////////////////////////////////////////
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