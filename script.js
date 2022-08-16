// make variables to assign them time values
let hours=0;
let minutes=0;
let seconds=0;



let displaySeconds=0;
let displayMinutes=0;
let displayHours=0;

let interval=null;

let status="stopped";

function StopWatch()
{
    seconds++;
    if(seconds/60===1){
        seconds=0;
        minutes++;
        if(minutes/60===1)
        {
            minutes=0;
            hours++;
        }
    }

    if(seconds<10){
        displaySeconds="0"+seconds.toString();

    }
    else{
        displaySeconds=seconds;
    }

    if(minutes<10){
        displayMinutes="0"+minutes.toString();
    }
    else{
        displayMinutes=minutes;
    }
    if(hours<10){
        displayHours="0"+hours.toString();
    }
    else{
        displayHours=hours;
    }
    document.getElementById("display").innerHTML=displayHours+":"+displayMinutes+":"+displaySeconds;

}


document.getElementById("startStop").onclick =  function startStop(){
 if(status==="stopped" ){
 interval=window.setInterval(StopWatch,10);
 document.getElementById("startStop").innerHTML="Stop";
 status="started";
 }

 else{
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML="Start";
    status="stopped";
 }
}

document.getElementById("reset").onclick =function reset(){
    window.clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("display").innerHTML="00:00:00";
    document.getElementById("startStop").innerHTML="Start";
    document.getElementById("data").innerHTML=" ";
}

// document.getElementById("split").onclick =  function split(){
 
// document.getElementById("data").innerHTML+=displayHours+":"+displayMinutes+":"+displaySeconds+"   /  "  ;

//     }


document.getElementById("split").onclick =  function split(){
   let val =displayHours +":"+displayMinutes+":"+displaySeconds ;
  const li = document.createElement("li")
  li.textContent = val
  document.getElementById("data").appendChild(li)
     }