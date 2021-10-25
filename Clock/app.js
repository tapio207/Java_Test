
window.onload = function aika(){

var appendHour = document.getElementById("hours")
var appendMin = document.getElementById("minutes")
var appendSec = document.getElementById("seconds")

var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();

    appendHour.innerHTML = h;
    appendMin.innerHTML = m;
    appendSec.innerHTML = s;

    setInterval(aika, 1000);

}


