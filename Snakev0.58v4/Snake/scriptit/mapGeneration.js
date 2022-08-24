window.onload = function () {
    timeLoad();
    spawnEnemys();
    spawnCoins();
    AddEventLisners();
    
}

function AddEventLisners(){
document.getElementById("startNew").addEventListener("click", NewGame);
document.getElementById("minusBtn").addEventListener("click", minusClick);
document.getElementById("plusBtn").addEventListener("click", plusClick);
document.getElementById("MpImg").addEventListener("click", dungeonPressed);
document.getElementById("FirstMapS").addEventListener("click", thisMapSelected);

document.getElementById("ItemShop").addEventListener("click", ItemShopSelected);
document.getElementById("Upgrade").addEventListener("click", UpgradeShopSelected);

document.getElementsByClassName("shopBackBtn")[0].addEventListener("click", ShopBackButton0)
document.getElementsByClassName("shopBackBtn")[1].addEventListener("click", ShopBackButton1)

}



var lastLeft = false
var lastRight = false
var lastUp = false
var lastDown = false


//empty
var o = "o";
//wall's
var w = "w";
//Player
var p = "p";
//Basic Enemy
var e = "e";
//coins
var c = "c";
//fireball
var f = "f";
//win pad
var k = "k";
var kX = 0;
var kY = 0;

//Map layout
var mapLayArr
mapLayArr = mapLayArr2;
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
function blockPosition() {
    arInd--;

    //Divien rivitys
    if (arInd == 0) {
        topPos = topPos + 10;
        leftPos = leftPos - 360;
        arInd = 4;
    } else {

    };
}


//Mappisäätöö
var mapinIndex = 0;
var mapinInnerIndex = 0;
var playerArray = 0;
var playerIndex = 0;
var Fcounter = 0;

//Pitäs updatee rahan näytöl
function MoneyUpdate() {
    document.getElementById("Money").innerHTML = "Money: " + Money;

}

//Ottaa kaikkien positionit ylös
//seinät
var AllWallPos = [];
var AppendWallPos = [];
var WallX = 0;
var WallY = 0;
//Kolikot
var AllCoinPos = [];
var AppendCoinPos = [];
var appendCoinX = 0;
var appendCoinY = 0;
//viholliset
var AllEnemyPos2 = [];
var AppendEnemyPos = [];
var EnemyX = 0;
var EnemyY = 0;
//Player
var PlayerX = 0;
var PlayerY = 0;

//debug
var final = "";
var finalF = "";
var stopMapConsole = 0;

//////////////////////////////////////////////////
//Mapin generointi
function timeLoad() {

    mapinIndex = 0;
    mapinInnerIndex = 0;
    playerArray = 0;
    playerIndex = 0;

    final = "";
    finalF = "";
    
    AllWallPos = [];
    AllCoinPos = [];

    mapLayArr.forEach(e => {

        //Tarkistaa löytyyks kyseunen merkki map arrayst
        for (var joku = 0; joku <= 8; joku++) {
            var wkö = mapLayArr[mapinInnerIndex][joku].includes(w);
            var okö = mapLayArr[mapinInnerIndex][joku].includes(o);
            var pkö = mapLayArr[mapinInnerIndex][joku].includes(p);
            var kkö = mapLayArr[mapinInnerIndex][joku].includes(k);
            var fko = mapLayArr[mapinInnerIndex][joku].includes(f);


            leftPos = leftPos + 10;
            

            //switch kattoo mikä blokki kyseessä
            switch (true) {

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

                    AppendWallPos = [];
                    WallX = leftPos;
                    WallY = topPos;
                    AppendWallPos.push(WallX);
                    AppendWallPos.push(WallY);
                    AllWallPos.push(AppendWallPos);

                    final = final + "[" + WallX + "," + WallY + "]" + ",";


                    break;
                    /////////////// (samaa)
                case fko:

                    const newDiv6 = document.createElement("div");
                    newDiv6.id = "Array" + mapinInnerIndex + "FireBall" + Fcounter;
                    newDiv6.className = "FireBall";

                    newDiv6.style.position = "absolute";
                    newDiv6.style.left = leftPos + 'px';
                    newDiv6.style.top = topPos + 'px';

                    document.getElementById("yolo").appendChild(newDiv6);
                    mapinIndex++;
                    Fcounter++;

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

                    PlayerX = leftPos;
                    PlayerY = topPos;

                    document.getElementById("yolo").appendChild(newDiv2);

                    createFloorUnderPlayer()

                    break;

                    case kkö:

                    const newDiv9 = document.createElement("div");
                    newDiv9.id = "WinBlock";
                    newDiv9.className = "WinBlocks";

                    newDiv9.style.position = "absolute";
                    newDiv9.style.left = leftPos + 'px';
                    newDiv9.style.top = topPos + 'px';

                    kX = leftPos;
                    kY = topPos;

                    document.getElementById("yolo").appendChild(newDiv9);
                    mapinIndex++;

                    break;
                    /////////////
/*
                    //coin?
                case ckö:

                    const newDiv4 = document.createElement("div");
                    newDiv4.id = "Coin";
                    newDiv4.className = "Coins";

                    newDiv4.style.position = "absolute";
                    newDiv4.style.left = leftPos + 'px';
                    newDiv4.style.top = topPos + 'px';

                    AppendCoinPos = [];
                    appendCoinX = leftPos;
                    appendCoinY = topPos;
                    AppendCoinPos.push(appendCoinX);
                    AppendCoinPos.push(appendCoinY);
                    AllCoinPos.push(AppendCoinPos);

                    document.getElementById("yolo").appendChild(newDiv4);



                    break;
                    */
            }

        }


        blockPosition();

        mapinInnerIndex++;
    });


    if(stopMapConsole <= 0){
    finalF = "[" + final + "]";
    console.log(finalF);
    document.getElementById("veijari").innerHTML = finalF;
    stopMapConsole++;
    }


}
//////////////////////////////////////////////////



var mapinInnerIndex2 = 0;

function findEnemySpot() {
    mapinInnerIndex2 = 0;
    mapLayArr.forEach(e => {
        for (var joku2 = 0; joku2 <= 8; joku2++) {
            var ekö2 = mapLayArr[mapinInnerIndex2][joku2].includes("e");

            if (ekö2 == true) {
                //Roskaa et sais BasicEnemyn liikkuu
                eArrPos = mapinInnerIndex2;
                eInnerArrPos = joku2;
                ePosArr.push(eArrPos);
                ePosArr.push(eInnerArrPos);


            } else {

            }
        }

        mapinInnerIndex2++;
    });



}

///////////////////////////////////////////////////////////////////////////

//Functio poistamaan kaikki divit lopuks ja resettaa blockin positio laitteen

function deleteDivs() {
    document.getElementById("yolo").innerHTML = "";
    

    leftPos = 300;
    topPos = 300;
    arInd = 4;
}


//////////////////////////////////////////////////


function createFloorUnderPlayer(){

    const newDiv5 = document.createElement("div");
    newDiv5.id = "Array" + mapinInnerIndex + "Block" + mapinIndex;
    newDiv5.className = "Floor";

    newDiv5.style.position = "absolute";
    newDiv5.style.left = leftPos + 'px';
    newDiv5.style.top = topPos + 'px';

    document.getElementById("yolo").appendChild(newDiv5);
    mapinIndex++;


}



   

