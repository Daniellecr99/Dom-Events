// Use an addEventListener
//  to attach a "mouseover" and "mouseout" event to a h3 element.
//The h3 should change size when mouseovered
var mouseEvent = document.getElementById("mouse");
function cSize ()
{
    document.getElementById("mouse").style.fontSize ="50px";}
mouseEvent.addEventListener("mouseover", cSize);

function cSizeDown ()
{
    document.getElementById("mouse").style.fontSize ="20px";}
mouseEvent.addEventListener("mouseout", cSizeDown);

 

//Part II
// Use an addEventListener
//  to attach a "mouseover" and "mouseout" element that asks 
// and answers a trivia question
var triviaQuestion = document.getElementById("trivaQ");
function triviaAnswer ()
{triviaQuestion.innerHTML ="Denver";}
triviaQuestion.addEventListener("mouseover",triviaAnswer);

function triviaCo ()
{triviaQuestion.innerHTML ="What is the Captial of Colorado?";}
triviaQuestion.addEventListener("mouseout",triviaCo);