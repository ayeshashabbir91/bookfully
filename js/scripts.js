(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		// click to edit

		$(".high-right-heading ul li button").click(function(){
			$(".high-right-heading ul li").attr("contenteditable","true");
		});

		// code for flag plugin

		$('#options').flagStrap({
				countries: {
					"AU": "Australia",
					"US": "United States",
					"GB": "United Kingdom",
					"IN": "India",
					"BD": "Bangladesh"

					
				},
				scrollable: true,
				scrollableHeight: "350px"
			});

				
		
		
		
		
		
		
		
		
	});
})(jQuery);