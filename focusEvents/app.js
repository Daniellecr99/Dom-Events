// When you enter the input field, a function is triggered which sets the background 
// color to skyBlue. When you leave the input field, 
// a function is triggered which sets the background color to grey.

//use single quotes to call event
const color= document.getElementById('myForm');
color.addEventListener('focus', nameFocusFunction, true);

color.addEventListener('blur', nameBlurFunction, true);


function nameFocusFunction () {
    document.getElementById('text').style.backgroundColor= "skyBlue";
}

function nameBlurFunction () {
    document.getElementById('text').style.backgroundColor= "grey";
}