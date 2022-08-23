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
function sortListDir() {
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("data");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "desc";
    // Make a loop that will continue until no switching has been done:
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("LI");
      // Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Check if the next item should switch place with the current item,
        based on the sorting direction (asc or desc): */
        if (dir == "asc") {
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            /* If next item is alphabetically lower than current item,
            mark as a switch and break the loop: */
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
            /* If next item is alphabetically higher than current item,
            mark as a switch and break the loop: */
            shouldSwitch= true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        // Each time a switch is done, increase switchcount by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
document.getElementById("startStop").onclick =  function startStop(){
 if(status==="stopped" ){
 interval=window.setInterval(StopWatch,10);
 document.getElementById("startStop").innerHTML="Stop";
 document.getElementById("startStop").style.background= "pink";
 status="started";
 //startStop.style.background='blue';
 }

 else{
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML="Start";
    document.getElementById("startStop").style.background= "white";
    status="stopped";
    let value =displayHours +":"+displayMinutes+":"+displaySeconds+"\t Pause";
    const li = document.createElement("li")

    li.textContent = value
   
    document.getElementById("data").appendChild(li)
    sortListDir()
 }
}

document.getElementById("reset").onclick =function reset(){
    if(status==="stopped"){
        window.clearInterval(interval);
        seconds=0;
        minutes=0;
        hours=0;
        document.getElementById("display").innerHTML="00:00:00";
        document.getElementById("startStop").innerHTML="Start";
        document.getElementById("data").innerHTML=" ";
        // document.getElementById("reset").style.background='lightgreen';
      
    }
    
}

document.getElementById("reset").onmousedown =  function changecolor(){
    document.getElementById("reset").style.background= "lightgreen";

}
document.getElementById("reset").onmouseup =  function changecolor(){
    document.getElementById("reset").style.background= "white";
    
}
document.getElementById("split").onclick =  function split(){
   let val =displayHours +":"+displayMinutes+":"+displaySeconds+"     Split";
 //  document.getElementById("split").style.background='lightblue';
 const li = document.createElement("li")
  li.textContent = val

  document.getElementById("data").appendChild(li)
  sortListDir()
     }
     document.getElementById("split").onmousedown =  function changecolor(){
        document.getElementById("split").style.background= "lightblue";
    
    }
    document.getElementById("split").onmouseup =  function changecolor(){
        document.getElementById("split").style.background= "white";
        
    }

 
