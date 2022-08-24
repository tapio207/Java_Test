

function pressAttackBtn(){

    const MeleeAttack = document.createElement("div");
    MeleeAttack.id = "MeleeAttack"

    switch (true) {
    case LastLeft:
    MeleeAttack.className = "MeleeAttackLeft";
    MeleeAttack.style.left = PlayerX - 10 + 'px';
    MeleeAttack.style.top = PlayerY + 'px';
    console.log("AttackLeft");   
    //Animation here!
    setTimeout(swordImg1, 10);
    setTimeout(DeleteAttack, 100);
    setTimeout(swordImg2, 105);
    sDamageEnemys();
    checkIfSwordHit()
    setTimeout(DeleteAttack, 190);
    setTimeout(swordImg3, 195);
    setTimeout(DeleteAttack, 290);
    //delete hit enemys here
    

    break;
    case LastRight:
    MeleeAttack.className = "MeleeAttackRight";
    MeleeAttack.style.left = PlayerX + 10 + 'px';
    MeleeAttack.style.top = PlayerY + 'px';
    console.log("AttackRight");   
    setTimeout(swordImg1, 10);
    setTimeout(DeleteAttack, 100);
    setTimeout(swordImg2, 105);
    sDamageEnemys();
    checkIfSwordHit()
    setTimeout(DeleteAttack, 190);
    setTimeout(swordImg3, 195);
    setTimeout(DeleteAttack, 290);

    break;

    case LastUp:
    MeleeAttack.className = "MeleeAttackUp";
    MeleeAttack.style.left = PlayerX + 'px';
    MeleeAttack.style.top = PlayerY - 10 + 'px';   
    console.log("AttackUp");  
    setTimeout(swordImg1, 10);
    setTimeout(DeleteAttack, 100);
    setTimeout(swordImg2, 105);
    sDamageEnemys();
    checkIfSwordHit()
    setTimeout(DeleteAttack, 190);
    setTimeout(swordImg3, 195);
    setTimeout(DeleteAttack, 290);

    break;

    case LastDown:
    MeleeAttack.className = "MeleeAttackDown";
    MeleeAttack.style.left = PlayerX + 'px';
    MeleeAttack.style.top = PlayerY + 10 + 'px';  
    console.log("AttackDown");  
    setTimeout(swordImg1, 10);
    setTimeout(DeleteAttack, 100);
    setTimeout(swordImg2, 105);
    sDamageEnemys();
    checkIfSwordHit()
    setTimeout(DeleteAttack, 190);
    setTimeout(swordImg3, 195);
    setTimeout(DeleteAttack, 290);

    break;


    }

    //add function here to damage enemys

}



function checkIfSwordHit(){
let enemys = AllEnemyPos;

if(swordHit == true){
enemys.splice(appendSwordInd, 1);

AllEnemyPos2 = enemys;
updateEnemys();



}else{console.log("Miss!! Heh")}



}








var swordX = 0;
var swordY = 0;
var swordOneTwo = 0;
var swordHit = false;
var appendSwordInd = 0;
function sDamageEnemys(){

swordHit = false;

    switch (true) {
    case LastLeft:
    
    for(let i = 0; i < AllEnemyPos.length;i++){
    swordX = AllEnemyPos[i][swordOneTwo];
    swordOneTwo++;
    swordY = AllEnemyPos[i][swordOneTwo];
    swordOneTwo--;

    if(swordX == PlayerX - 10 && swordY == PlayerY){
    swordHit = true;
    appendSwordInd = i;
    }

    }


    break;
    case LastRight:

        for(let i = 0; i < AllEnemyPos.length;i++){
            swordX = AllEnemyPos[i][swordOneTwo];
            swordOneTwo++;
            swordY = AllEnemyPos[i][swordOneTwo];
            swordOneTwo--;
        
            if(swordX == PlayerX + 10 && swordY == PlayerY){
            swordHit = true;
            appendSwordInd = i;
            }
        
            }


    break;

    case LastUp:

        for(let i = 0; i < AllEnemyPos.length;i++){
            swordX = AllEnemyPos[i][swordOneTwo];
            swordOneTwo++;
            swordY = AllEnemyPos[i][swordOneTwo];
            swordOneTwo--;
        
            if(swordX == PlayerX && swordY == PlayerY - 10){
            swordHit = true;
            appendSwordInd = i;
            }
        
            }


    break;

    case LastDown:

        for(let i = 0; i < AllEnemyPos.length;i++){
            swordX = AllEnemyPos[i][swordOneTwo];
            swordOneTwo++;
            swordY = AllEnemyPos[i][swordOneTwo];
            swordOneTwo--;
        
            if(swordX == PlayerX && swordY == PlayerY + 10){
            swordHit = true;
            appendSwordInd = i;
            }
        
            }


    break;

    }


    console.log(swordHit);
}





function DeleteAttack(){
document.getElementById("MeleeAttackDiv").innerHTML = "";

}


function swordImg1(){
const AnimAttack1 = document.createElement("div");
AnimAttack1.className = "MeleeAttack"
AnimAttack1.style.position = "absolute";

switch (true) {
    case LastLeft:
        
        AnimAttack1.id = "MeleeAttack1Left"
        AnimAttack1.style.position = "absolute";
        AnimAttack1.style.left = PlayerX - 10 + 'px';
        AnimAttack1.style.top = PlayerY + 'px';
        document.getElementById("MeleeAttackDiv").appendChild(AnimAttack1); 

    break;
    case LastRight:
        
        AnimAttack1.id = "MeleeAttack1Right"
        AnimAttack1.style.position = "absolute";
        AnimAttack1.style.left = PlayerX + 10 + 'px';
        AnimAttack1.style.top = PlayerY + 'px';
        document.getElementById("MeleeAttackDiv").appendChild(AnimAttack1); 

    break;

    case LastUp:
        
        AnimAttack1.id = "MeleeAttack1Up"
        AnimAttack1.style.position = "absolute";
        AnimAttack1.style.left = PlayerX + 'px';
        AnimAttack1.style.top = PlayerY - 10 + 'px';
        document.getElementById("MeleeAttackDiv").appendChild(AnimAttack1); 

    break;

    case LastDown:
        
        AnimAttack1.id = "MeleeAttack1Down"
        AnimAttack1.style.position = "absolute";
        AnimAttack1.style.left = PlayerX + 'px';
        AnimAttack1.style.top = PlayerY + 10 + 'px';
        document.getElementById("MeleeAttackDiv").appendChild(AnimAttack1); 

    break;


    }



}



function swordImg2(){
    const AnimAttack2 = document.createElement("div");
    AnimAttack2.className = "MeleeAttack"
    AnimAttack2.style.position = "absolute";
    
    switch (true) {
        case LastLeft:
            
            AnimAttack2.id = "MeleeAttack2Left"
            AnimAttack2.style.position = "absolute";
            AnimAttack2.style.left = PlayerX - 10 + 'px';
            AnimAttack2.style.top = PlayerY + 'px';
            document.getElementById("MeleeAttackDiv").appendChild(AnimAttack2); 
    
        break;
        case LastRight:
           
            AnimAttack2.id = "MeleeAttack2Right"
            AnimAttack2.style.position = "absolute";
            AnimAttack2.style.left = PlayerX + 10 + 'px';
            AnimAttack2.style.top = PlayerY + 'px';
            document.getElementById("MeleeAttackDiv").appendChild(AnimAttack2); 
    
        break;
    
        case LastUp:
            
            AnimAttack2.id = "MeleeAttack2Up"
            AnimAttack2.style.position = "absolute";
            AnimAttack2.style.left = PlayerX + 'px';
            AnimAttack2.style.top = PlayerY - 10 + 'px';
            document.getElementById("MeleeAttackDiv").appendChild(AnimAttack2); 
    
        break;
    
        case LastDown:
            
            AnimAttack2.id = "MeleeAttack2Down"
            AnimAttack2.style.position = "absolute";
            AnimAttack2.style.left = PlayerX + 'px';
            AnimAttack2.style.top = PlayerY + 10 + 'px';
            document.getElementById("MeleeAttackDiv").appendChild(AnimAttack2); 
    
        break;
    
    
        }
    
    
    
    }


    function swordImg3(){
        const AnimAttack3 = document.createElement("div");
        AnimAttack3.className = "MeleeAttack"
        AnimAttack3.style.position = "absolute";
        
        switch (true) {
            case LastLeft:
                
                AnimAttack3.id = "MeleeAttack3Left"
                AnimAttack3.style.position = "absolute";
                AnimAttack3.style.left = PlayerX - 10 + 'px';
                AnimAttack3.style.top = PlayerY + 'px';
                document.getElementById("MeleeAttackDiv").appendChild(AnimAttack3); 
        
            break;
            case LastRight:
               
                AnimAttack3.id = "MeleeAttack3Right"
                AnimAttack3.style.position = "absolute";
                AnimAttack3.style.left = PlayerX + 10 + 'px';
                AnimAttack3.style.top = PlayerY + 'px';
                document.getElementById("MeleeAttackDiv").appendChild(AnimAttack3); 
        
            break;
        
            case LastUp:
                
                AnimAttack3.id = "MeleeAttack3Up"
                AnimAttack3.style.position = "absolute";
                AnimAttack3.style.left = PlayerX + 'px';
                AnimAttack3.style.top = PlayerY - 10 + 'px';
                document.getElementById("MeleeAttackDiv").appendChild(AnimAttack3); 
        
            break;
        
            case LastDown:
                
                AnimAttack3.id = "MeleeAttack3Down"
                AnimAttack3.style.position = "absolute";
                AnimAttack3.style.left = PlayerX + 'px';
                AnimAttack3.style.top = PlayerY + 10 + 'px';
                document.getElementById("MeleeAttackDiv").appendChild(AnimAttack3); 
        
            break;
        
        
            }
        
        
        
        }
