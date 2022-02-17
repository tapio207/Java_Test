var coinStartingPos = [[330, 400], [370, 400], [350, 410], [580, 440], [490, 610]];

var CoinInd = 0;
var CoinOneTwo = 0;
var CoinSpawnX = 0;
var CoinSpawnY = 0;

var AppendCoinPos = [];
var CoinX = 0;
var CoinY = 0;
var AllCoinPos = [];



function spawnCoins(){
AllCoinPos = [];

for(CoinInd = 0; CoinInd < coinStartingPos.length;CoinInd++){
    CoinSpawnX = coinStartingPos[CoinInd][CoinOneTwo];
    CoinOneTwo++;
    CoinSpawnY = coinStartingPos[CoinInd][CoinOneTwo];
    CoinOneTwo--;
    
    const newDiv9 = document.createElement("div");
    newDiv9.id = "Coin" + CoinInd;
    newDiv9.className = "Coins";
    
    //Give div a position
    newDiv9.style.position = "absolute";
    newDiv9.style.left = CoinSpawnX + 'px';
    newDiv9.style.top = CoinSpawnY + 'px';
    
    //Create a div
    document.getElementById("CoinDiv").appendChild(newDiv9);
    
    
    AppendCoinPos = [];
    AppendCoinPos.push(CoinSpawnX);
    AppendCoinPos.push(CoinSpawnY);
    AllCoinPos.push(AppendCoinPos);

    
}

}

function updateCoins(){

AllCoinPos.splice(appendCoinInt, 1);
coinStartingPos = AllCoinPos;
document.getElementById("CoinDiv").innerHTML = "";
spawnCoins();
updateMoney();
}

var moneyatm = 0;
function updateMoney(){
moneyatm = moneyatm + 10;
document.getElementById("Money").innerHTML = "Money: " + moneyatm;

}