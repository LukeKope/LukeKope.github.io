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
	$('.aboutUsButton').delay(1300).animate({'marginTop':'+=-10px','opacity':'1'},800);

});
