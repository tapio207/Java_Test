window.onload=function(){

var sec = 0;
var min = 0;
var i ;


var appendSec = document.getElementById("second")
var appendMin = document.getElementById("minut")


document.getElementById("start-button").addEventListener("click", btnClick)
document.getElementById("stop-button").addEventListener("click", stopTime)
document.getElementById("reset-button").addEventListener("click", resetTime)


function btnClick(){
refresh = setInterval(secTime, 1000)
}


function secTime(){
  document.getElementById("start-button").disabled = true;

  sec++; 

    if(sec <= 9){
      appendSec.innerHTML = "0" + sec;
    }
    if(sec > 9){
      appendSec.innerHTML = sec;
    }

    if(sec >= 60){
      sec = 0;
      min++;
      appendSec.innerHTML = "0" + sec;
      appendMin.innerHTML =  min;
    }
    if(min <= 9){
      appendMin.innerHTML = "0" + min;
    }

}


function stopTime(){

  clearInterval(refresh);
  document.getElementById("start-button").disabled = false;
}

function resetTime(){

  clearInterval(refresh);
  sec = 0;
  min = 0;
  appendMin.innerHTML = "0" + min;
  appendSec.innerHTML = "0" + sec;
  document.getElementById("start-button").disabled = false;

}

}