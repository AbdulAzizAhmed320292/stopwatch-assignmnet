//mod up counter


var minHeadingu = document.getElementById("min");
var secHeadingu = document.getElementById("sec");
var hoursHeadingu = document.getElementById("hours");

var secu = 00;
var minu = 00; 
var hoursu = 00;
function timer(){
secu++;

secHeadingu.innerHTML = secu;    

if(secu === 60){
    minu++;
    minHeadingu.innerHTML = minu;
    secu = 00;
}


else if(minu === 60){
    hoursu++;
    hoursHeadingu.innerHTML = hoursu;
    minu = 00;
}
}

var interval;

function start(){
    
   interval = setInterval(timer , 1000);
   
}

function pause(){
    clearInterval(interval);
}
 

function reset(){
    secu = 00;
    
    secHeadingu.innerHTML = secu;
    minu = 00;
    minHeadingu.innerHTML = minu;
    hoursu = 00;
    hoursHeadingu.innerHTML = hoursu;
    

}











//mod down counter


var minHeadingd = document.getElementById("mind");
var secHeadingd = document.getElementById("secd");
var hoursHeadingd = document.getElementById("hoursd");

var secd = 60;
var mind = 60; 
var hoursd = 01;
function timerd(){
secd--;

secHeadingd.innerHTML = secd;    

if(secd === 00){
    mind--;
    minHeadingd.innerHTML = mind;
    secd = 60;
}


else if(mind === 00){
    hoursd--;
    hoursHeadingd.innerHTML = hoursd;
    mind = 60;
}
}

var intervald;

function startd(){
    
   intervald = setInterval(timerd , 1000);

}

function paused(){
    clearInterval(intervald);
}
 

function resetd(){
    secd = 60;    
    secHeadingd.innerHTML = secd;
    mind = 60;
    minHeadingd.innerHTML = mind;
    hoursd = 01;
    hoursHeadingd.innerHTML = hoursd;
    

}
