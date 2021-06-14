//Click the buttons to toggle between showing and hiding the content in collapsible.

var collapse= document.getElementsByClassName('collapsible'); 
var i; 
for(let i=0; i < collapse.length; i++) {
    collapse[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var content= this.nextElementSibling; 
        if (content.style.maxHeight) {
            content.style.maxHeight=null; 
        } else {
            content.style.maxHeight= content.scrollHeight + 'px'; 
        }
    });
}