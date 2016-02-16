var vid = document.getElementById("bgvid");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


// Button Style
$(document).ready(function(){
 $('#button').click(function(event){
  $('#content').append('<p>'+ $('#input').val)()+ '</p>');
 }) 
});