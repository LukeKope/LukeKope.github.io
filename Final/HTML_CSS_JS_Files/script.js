//Navbar lowers on scroll
$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 100) {
    	$('.nav').addClass('shrink');
			$('.nav').css('boxShadow', "0px 1px 10px grey");
    }
    else {
    // $('#nav').removeClass('shrink');
		 $('.nav').css('boxShadow', "0px 0px 0px black");
    }
  });


//fadeIn animations
	$('.fadeContainer').animate({'opacity':'1'},1000);
	$('#aboutUsButton').delay(1300).animate({'marginTop':'+=-10px','opacity':'1'},800);


//Time permiting have it so that the logo fades in first (or last, see which looks better). To do this, need to isolate all of the elements you want to fade in and fade them all individually rather than
//using this fade container.

//alternate row colors on events upcomingEventsImages
$(function(){
   var numRows = $(".row").length;
	 if(numRows%2===0){
	 $('row').addClass("evenRowBackground");
 }else{
    $('row').addClass("oddRowBackground");
 }
});


//change css proprty on hover of row in Events Page
// $(".row").mouseenter(
// 	function(){
// 		console.log('hover');
// 		$(".allEventsFlex").css("opacity", "0.9")
// 	});


});

//Have the navbar section change colors when you're on that section (toDo save this to the end. It's a small detail)
function activeChange() {
	console.log('test');
  var elmnt = document.getElementById("about");
  var aboutHeight = elmnt.clientHeight;
	var screenHeight = window.innerHeight;
	console.log(aboutHeight, screenHeight);
	if(screenHeight > aboutHeight){
		console.log('height');
	}
}
//use the client height for this function it's what you can see on the screen
