// The event handler onFocus is fired when a form element gets 
// the focus.
// Similarly, the onblur event handler is fired when the form 
// element loses focus, i.e when the cursor moves away from form field
//add an alert box that responses to the onclick alerting the
// user before they fill out the form
var userForm= document.getElementById('myForm');

function focusField () {
    userForm.style.backgroundColor= "blue";  
}
userForm.addEventListener('focus', focusField);

function nameBlurFunction () {
    alert("Please fill out form");
}
userForm.addEventListener('blur', nameBlurFunction);