function myFunction () {
    document.getElementById("demo").innerHTML ="Hello World";
    document.getElementById("demo").style.color ="red";
    

// add date & time to function 
    var currentTime= new Date ();
    var time = document.getElementById("cTime");
    time.innerHTML= currentTime.toLocaleTimeString();
}



