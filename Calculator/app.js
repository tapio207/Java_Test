window.onload = function(){
    //näytölle tuleva
    var tulos = "";
    //sisä matikka
    var insideMath = "";
    //tääl on kaikki luvut
    var luvut = [];
    //finaali vastaus
    var finalAwnser = "";
    
    
    // noh ei jaksa selittää... näät kyl
    var appendPohja = document.getElementById("pohjadiv")
    document.getElementById("0").addEventListener("click", nolla)
    document.getElementById("1").addEventListener("click", yksi)
    document.getElementById("2").addEventListener("click", kaksi)
    document.getElementById("3").addEventListener("click", kolme)
    document.getElementById("4").addEventListener("click", neljä)
    document.getElementById("5").addEventListener("click", viisi)
    document.getElementById("6").addEventListener("click", kuusi)
    document.getElementById("7").addEventListener("click", seiska)
    document.getElementById("8").addEventListener("click", kasi)
    document.getElementById("9").addEventListener("click", ysi)
    document.getElementById("plus").addEventListener("click", plussa)
    document.getElementById("minus").addEventListener("click", miinus)
    document.getElementById("times").addEventListener("click", kertaa)
    document.getElementById("divide").addEventListener("click", jako)
    document.getElementById("is").addEventListener("click", yhtä)
    document.getElementById("clear").addEventListener("click", tyhjä)
    document.getElementById("dot").addEventListener("click", piste)
    
    ////////////////////////////////////
    
    //functiot jotka ovat yhdistetty nappuloihin
    //ensin muokkaavat näytölle tulevaa tulosta
    //sitten sisäistä matikka "taulua"/säilytysboxia
    //ja lopulta työntää näytölle tulevan luvun näytölle
    function nolla(){
    tulos = tulos + "0";
    insideMath = insideMath + 0;
    appendPohja.innerHTML = tulos;
    }
    
    function yksi(){
        tulos = tulos + "1"
        insideMath = insideMath + 1;
        appendPohja.innerHTML = tulos
    }
    
    function kaksi(){
        tulos = tulos + "2"
        insideMath = insideMath + 2;
        appendPohja.innerHTML = tulos
    }
    
    function kolme(){
        tulos = tulos + "3"
        insideMath = insideMath + 3;
        appendPohja.innerHTML = tulos
    }
    
    function neljä(){
        tulos = tulos + "4"
        insideMath = insideMath + 4;
        appendPohja.innerHTML = tulos
    }
    
    function viisi(){
        tulos = tulos + "5"
        insideMath = insideMath + 5;
        appendPohja.innerHTML = tulos
    }
    
    function kuusi(){
        tulos = tulos + "6"
        insideMath = insideMath + 6;
        appendPohja.innerHTML = tulos
    }
    
    function seiska(){
        tulos = tulos + "7"
        insideMath = insideMath + 7;
        appendPohja.innerHTML = tulos
    }
    
    function kasi(){
        tulos = tulos + "8"
        insideMath = insideMath + 8;
        appendPohja.innerHTML = tulos
    }
    
    function ysi(){
        tulos = tulos + "9"
        insideMath = insideMath + 9;
        appendPohja.innerHTML = tulos
    }
    // melkee sama ku yläpuolella olevat, mutta vaivalloisemmat
    function plussa(){
        tulos = tulos + "+"
    
    //muuttaa stringin numeroks laskuu vartes
    let luvutNum = Number(insideMath);
        luvut.push(luvutNum);
        luvut.push("+");
        insideMath = "";

    
        appendPohja.innerHTML = tulos


    }
    
    function miinus(){
        tulos = tulos + "-"
    
    let luvutNum = Number(insideMath);
        luvut.push(luvutNum);
        luvut.push("-");
        insideMath = "";

    
        appendPohja.innerHTML = tulos

    }
    
    function kertaa(){

        tulos = tulos + "×"
    
    let luvutNum = Number(insideMath);
        luvut.push(luvutNum);
        luvut.push("×");
        insideMath = "";

    
        appendPohja.innerHTML = tulos

    }
    
    function jako(){
        tulos = tulos + "÷"
    
    let luvutNum = Number(insideMath);
        luvut.push(luvutNum);
        luvut.push("÷");
        insideMath = "";

    
        appendPohja.innerHTML = tulos
    }
    
    function piste(){
        tulos = tulos + "."
        insideMath = insideMath + ".";
    
        appendPohja.innerHTML = tulos
    }
    
    //tyhjentää näytön, arrayn missä kaikki luvut ja merkit säilytetään
    //sekä sisäisen matikan
    function tyhjä(){
    tulos = "";
    luvut = [];
    insideMath = "";
    
    appendPohja.innerHTML = tulos;

       
    }
    

    //periaattees ylimääräst tekstii
    var num = appendPohja.textContent;
    num = num.split(/\+|\-|\×|\÷/g);
    luvut.push(insideMath);

    
    function yhtä(){

let luvutNum = Number(insideMath);
    luvut.push(luvutNum);
    
    
    // antaa true tai false tuloksen riippuen että löytyykö merkki vai ei
    var isPlus = luvut.includes("+");
    var isMinus = luvut.includes("-");
     var isJako = luvut.includes("÷");
    var isKerto = luvut.includes("×");

    // antaa elementille merkin indexin seuraavaa vaihetta varten
    var indKerto = luvut.indexOf("×");
    var indJako = luvut.indexOf("÷");
    var indPlus = luvut.indexOf("+");
    var indMiinus = luvut.indexOf("-");



    for(var i = luvut.length; i >= 2; i-- ){
    
    
    switch (true){
    
    case isKerto:  


    //kertomerkin index
    let j = indKerto;
    //luku ennen kertomerkkii
    let x = luvut[j -1];
    //luku sen jälkee
    let y = luvut[j +1];
    //matikka joka ei toimi
    var vastaus = x * y;
    // ja sit hankalaa säätöö. read me varmaa saa ees vähä ymmärtää mit haen
    luvut.splice(j+1,1);
    luvut.splice(j-1,1);
    luvut.splice(j-1,0,vastaus);
    luvut.splice(j,1);


    finalAwnser = vastaus;



    var isPlus = luvut.includes("+");
    var isMinus = luvut.includes("-");
    var isJako = luvut.includes("÷");
    var isKerto = luvut.includes("×");

    var indKerto = luvut.indexOf("×");
    var indJako = luvut.indexOf("÷");
    var indPlus = luvut.indexOf("+");
    var indMiinus = luvut.indexOf("-");


        break;
    
    case isJako:  
        let j2 = indJako;
        let x2 = luvut[j2 -1];
        let y2 = luvut[j2 +1];
        var vastaus2 = x2 / y2;
        luvut.splice(j2+1,1);
        luvut.splice(j2-1,1);
        luvut.splice(j2-1,0,vastaus2);
        luvut.splice(j2,1);


        finalAwnser = vastaus2;


        var isPlus = luvut.includes("+");
        var isMinus = luvut.includes("-");
        var isJako = luvut.includes("÷");
        var isKerto = luvut.includes("×");
    
        var indKerto = luvut.indexOf("×");
        var indJako = luvut.indexOf("÷");
        var indPlus = luvut.indexOf("+");
        var indMiinus = luvut.indexOf("-");
        break;
    
    case isPlus:  
    let j3 = indPlus;
    let x3 = luvut[j3 -1];
    let y3 = luvut[j3 +1];
    var vastaus3 = x3 + y3;
    luvut.splice(j3+1,1);
    luvut.splice(j3-1,1);
    luvut.splice(j3-1,0,vastaus3);
    luvut.splice(j3,1);


    finalAwnser = vastaus3;

    
    var isPlus = luvut.includes("+");
    var isMinus = luvut.includes("-");
    var isJako = luvut.includes("÷");
    var isKerto = luvut.includes("×");

    var indKerto = luvut.indexOf("×");
    var indJako = luvut.indexOf("÷");
    var indPlus = luvut.indexOf("+");
    var indMiinus = luvut.indexOf("-");
        break;
    
    case isMinus:  
    let j4 = indMiinus;
    let x4 = luvut[j4 -1];
    let y4 = luvut[j4 +1];
    var vastaus4 = x4 - y4;
    luvut.splice(j4+1,1);
    luvut.splice(j4-1,1);
    luvut.splice(j4-1,0,vastaus4);
    luvut.splice(j4,1);

    finalAwnser = vastaus4;


    var isPlus = luvut.includes("+");
    var isMinus = luvut.includes("-");
    var isJako = luvut.includes("÷");
    var isKerto = luvut.includes("×");

    var indKerto = luvut.indexOf("×");
    var indJako = luvut.indexOf("÷");
    var indPlus = luvut.indexOf("+");
    var indMiinus = luvut.indexOf("-");
    
        break;
    
    
    }

    tulos = finalAwnser;
    insideMath = finalAwnser;
    appendPohja.innerHTML = tulos;

    
    }


    
    }
    
    
    
    }
    
    
    







