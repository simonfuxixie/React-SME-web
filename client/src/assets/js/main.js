(function ($){
	"use strict";
	// jQuery for Plugins
	
  
  // jQuery for Custome js
	jQuery(document).ready(function($){
		$('.owl-carousel').owlCarousel({
				loop:true,
				margin:10,
				responsiveClass:true,
				responsive:{
						0:{
								items:1,
								nav:true
						},
						600:{
								items:3,
								nav:false
						},
						1000:{
								items:5,
								nav:true,
								loop:false
						}
				}
		})
		
			
	});
	
  // jQuery for loading js
	jQuery(window).load(function(){
		
		
	});
	
	
}(jQuery));