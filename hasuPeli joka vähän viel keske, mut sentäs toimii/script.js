window.onload = function(){
//odottaa että yhtä neljöä painetaan
document.getElementById("nappi").addEventListener("click", start);
document.getElementById("mVäriBtn").addEventListener("click", btnYksi);
document.getElementById("fVäriBtn").addEventListener("click", btnKaksi);
document.getElementById("fVäriBtn2").addEventListener("click", btnKolme);
document.getElementById("fVäriBtn3").addEventListener("click", btnNeljä);
document.getElementById("fVäriBtn4").addEventListener("click", btnViisi);
document.getElementById("fVäriBtn5").addEventListener("click", btnKuusi);



//antaa joka neljölle false.. jutun
var arr1 = [document.getElementById("mVäri"), 0, false];
var arr2 = [document.getElementById("fVäri"), 1, false];
var arr3 = [document.getElementById("fVäri2"), 2, false];
var arr4 = [document.getElementById("fVäri3"), 3, false];
var arr5 = [document.getElementById("fVäri4"), 4, false];
var arr6 = [document.getElementById("fVäri5"), 5, false];

//luo random numeron jonka perusteella valikoin oikean vastauksen
var neljö = Math.floor(Math.random() * 6);

//valikoi mikä neljö on oikea
function start(){



    switch(neljö){

        case arr1[1]: arr1.pop();
                      arr1.push(true);
        document.getElementById("rgbValue").innerHTML = value;

        break;

        case arr2[1]: arr2.pop();
                      arr2.push(true);
        document.getElementById("rgbValue").innerHTML = value2;

        break;

        case arr3[1]: arr3.pop();
                      arr3.push(true);
        document.getElementById("rgbValue").innerHTML = value3;

        break;

        case arr4[1]: arr4.pop();
                      arr4.push(true);
        document.getElementById("rgbValue").innerHTML = value4;

        break;

        case arr5[1]: arr5.pop();
                      arr5.push(true);
        document.getElementById("rgbValue").innerHTML = value5;

        break;

        case arr6[1]: arr6.pop();
                      arr6.push(true);
        document.getElementById("rgbValue").innerHTML = value6;

        break;


    }

    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    
    //laittaa rgb arvot muotoon jolla voi muokata css tiedostoa
    var value = "rgb(" + x + "," + y + "," + z + ")"; 
    
    //muokkaa css tiedoston
    document.getElementById("mVäri").style.backgroundColor = value;
    document.getElementById("rgbValue").innerHTML = value;
    
    console.log(value);
    
    //nämä luo väärille neljöille random värit ja työntää ne css tiedostoon
    
    var x2 = Math.floor(Math.random() * 255);
    var y2 = Math.floor(Math.random() * 255);
    var z2 = Math.floor(Math.random() * 255);
    
    var value2 = "rgb(" + x2 + "," + y2 + "," + z2 + ")"; 
    document.getElementById("fVäri").style.backgroundColor = value2;
    
    //
    
    var x3 = Math.floor(Math.random() * 255);
    var y3 = Math.floor(Math.random() * 255);
    var z3 = Math.floor(Math.random() * 255);
    
    var value3 = "rgb(" + x3 + "," + y3 + "," + z3 + ")"; 
    document.getElementById("fVäri2").style.backgroundColor = value3;
    
    //
    
    var x4 = Math.floor(Math.random() * 255);
    var y4 = Math.floor(Math.random() * 255);
    var z4 = Math.floor(Math.random() * 255);
    
    var value4 = "rgb(" + x4 + "," + y4 + "," + z4 + ")"; 
    document.getElementById("fVäri3").style.backgroundColor = value4;
    
    //
    
    var x5 = Math.floor(Math.random() * 255);
    var y5 = Math.floor(Math.random() * 255);
    var z5 = Math.floor(Math.random() * 255);
    
    var value5 = "rgb(" + x5 + "," + y5 + "," + z5 + ")"; 
    document.getElementById("fVäri4").style.backgroundColor = value5;
    
    //
    
    var x6 = Math.floor(Math.random() * 255);
    var y6 = Math.floor(Math.random() * 255);
    var z6 = Math.floor(Math.random() * 255);
    
    var value6 = "rgb(" + x6 + "," + y6 + "," + z6 + ")"; 
    document.getElementById("fVäri5").style.backgroundColor = value6;


    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
    console.log(arr5);
    console.log(arr6);
    console.log(neljö);


}



function btnYksi(){
if(arr1[2] == true){
oikein();
}else{
väärinYksi();
}
}

function btnKaksi(){
if(arr2[2] == true){
oikein();
}else{
väärinKaksi();
}
}

function btnKolme(){
if(arr3[2] == true){
oikein();
}else{
väärinKolme();
}
}

function btnNeljä(){
if(arr4[2] == true){
oikein();
}else{
väärinNeljä();
}
}

function btnViisi(){
if(arr5[2] == true){
oikein();
}else{
väärinViisi();
}
}

function btnKuusi(){
if(arr6[2] == true){
oikein();
}else{
 väärinKuusi();
}
}





function oikein(){
document.getElementById("rgbValue").innerHTML = "Oikein";
}

function väärinYksi(){
document.getElementById("mVäri").style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
}
function väärinKaksi(){
document.getElementById("fVäri").style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
}
function väärinKolme(){
document.getElementById("fVäri2").style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
}
function väärinNeljä(){
document.getElementById("fVäri3").style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
}
function väärinViisi(){
document.getElementById("fVäri4").style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
}
function väärinKuusi(){
document.getElementById("fVäri5").style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
}




}
