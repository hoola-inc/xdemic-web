jQuery(function() {
	jQuery(".menu a").click(function() {
		jQuery('html, body').animate({
			scrollTop: jQuery(this.hash).offset().top - 0 
		}, 1500);
		return false ;
	});
});

jQuery(function(){
	jQuery("#header .menu").data("top", jQuery("#header .menu").offset().top - 0); // set original position on load
	jQuery(window).scroll(fixDiv);


function fixDiv() {
	var jQuerydiv = jQuery("#header .menu");
	
	var wrapper = jQuery(".wrapper").width();


		if (jQuery(window).scrollTop() > jQuerydiv.data("top")) { 
			
				jQuery('#header .menu').css({'position': 'fixed', 'top': '0' , 'left': '0' , 'width': '100%' , 'z-index': '9999', 'background': 'rgba(118, 168, 0255, 0.9)', 'padding': '10px 0'}); 
		}
		else {
			jQuery('#header .menu').css({'position': 'static', 'top': 'auto' , 'opacity': '1', 'background': 'none' , 'padding': '0'});
		}
}

});

jQuery(function(){
	jQuery('#contactform .scroll-top').click(function(){
		jQuery('html, body').animate({scrollTop:0}, 'slow');
	});
});

jQuery(function(){
	AOS.init();
  });

// jQuery(function(){
// 	jQuery("#header .menu li a").click(function(){
// 		jQuery("#header .menu li").removeClass('active');
// 		jQuery(this).parent().addClass('active');
// 		return false
// 	});
// });