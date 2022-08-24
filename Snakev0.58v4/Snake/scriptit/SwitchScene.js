var CurrentScene = 0;

function NewGame(){
CurrentScene = 1;
console.log(CurrentScene);
mapSwitchF();
updateMenuMoney()
}

function dungeonPressed(){
CurrentScene = 2;
console.log(CurrentScene);
mapSwitchF();
updateMenuMoney()

}

function thisMapSelected(){
CurrentScene = 3;
console.log(CurrentScene);
mapSwitchF();
updateMenuMoney()

}

function ItemShopSelected(){
updateMenuMoney()
document.getElementById("MapSelector").style.display = "none";
document.getElementById("ItemShopOpen").style.display = "block";
document.getElementById("UpgradeShopOpen").style.display = "none";
}

function UpgradeShopSelected(){
updateMenuMoney()
document.getElementById("MapSelector").style.display = "none";
document.getElementById("ItemShopOpen").style.display = "none";
document.getElementById("UpgradeShopOpen").style.display = "block";

}


function mapSwitchF(){
updateMenuMoney()


switch(true){

case(CurrentScene == 0):

document.getElementById("indexScene").style.display = "block";
document.getElementById("GsMenuScene").style.display = "none";
document.getElementById("SelectMapScene").style.display = "none";
document.getElementById("GameStartedScene").style.display = "none";
document.getElementById("YourMoney").style.display = "none";


break;

case(CurrentScene == 1):

document.getElementById("indexScene").style.display = "none";
document.getElementById("GsMenuScene").style.display = "block";
document.getElementById("SelectMapScene").style.display = "none";
document.getElementById("GameStartedScene").style.display = "none";
document.getElementById("YourMoney").style.display = "block";


break;

case(CurrentScene == 2):

document.getElementById("indexScene").style.display = "none";
document.getElementById("GsMenuScene").style.display = "none";
document.getElementById("SelectMapScene").style.display = "block";
document.getElementById("GameStartedScene").style.display = "none";
document.getElementById("YourMoney").style.display = "block";

break;

case(CurrentScene == 3):

document.getElementById("indexScene").style.display = "none";
document.getElementById("GsMenuScene").style.display = "none";
document.getElementById("SelectMapScene").style.display = "none";
document.getElementById("GameStartedScene").style.display = "block";
document.getElementById("YourMoney").style.display = "none";


break;

}
}


function ShopBackButton0(){
document.getElementById("ItemShopOpen").style.display = "none";


document.getElementById("MapSelector").style.display = "block";

}
function ShopBackButton1(){

document.getElementById("UpgradeShopOpen").style.display = "none";

document.getElementById("MapSelector").style.display = "block";

}

function updateMenuMoney(){
document.getElementById("YourMoneyTxt").innerHTML = "Money: " + moneyatm;
}