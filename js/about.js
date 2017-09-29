/*
    Author : DigiSquire Team
    Website : www.digisquite.co
    Support : www.digisquite.co
*/

/*
   Table Of Content

   1. Preloader
   2. Script for contact-us page css
   3. Script to Activate the Carousel
   4. Mobile Navigation Hide or Collapse on Click
   5. Google Map
*/

(function ($) {
	'use strict';

	jQuery(document).ready(function () {
		/* Preloader */
		$(window).on('load', function () {
			$('body').addClass('loaded');
		});
		//script for contact-us page start
		$(window).on('load', function () {
			$('#eId').addClass('email-load');
		});
		$("#email1").focus(function(){
			$('#eId').removeClass('email-load');
    });
		$('#email1').blur(function()
		{
			if(!$(this).val() ) {
				  $('#eId').addClass('email-load');
			}
		});
		/* Mobile Navigation Hide or Collapse on Click */
		$(document).on('click', '.navbar-collapse.in', function (e) {
			if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
				$(this).collapse('hide');
			}
		});
		$('body').scrollspy({
			target: '.navbar-collapse',
			offset: 195

		});

        /* Statistics Counter */

        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');

           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 5000,
           refreshInterval: 50
           })
           });

					 /*---------------------------------------------*
					      * Gallery Pop Up Animation
					      ---------------------------------------------*/

					     $('.gallery-img').magnificPopup({
					         type: 'image',
					         gallery: {
					             enabled: true
					         },
									 image: {
 markup: '<div class="mfp-figure gallery-img">'+
					 '<div class="mfp-close"></div>'+
					 '<div class="mfp-img"></div>'+
					 '<div class="mfp-bottom-bar">'+
						 '<div class="mfp-title"></div>'+
						 '<div class="mfp-counter"></div>'+
					 '</div>'+
				 '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

 cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
 titleSrc: 'title',
 verticalFit: true, // Fits image in area vertically

 tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
}
					     });
		/* Google Map */
		 $('#my-address').gMap({
		    zoom: 5,
		    scrollwheel: true,
		    maptype: 'ROADMAP',
		    markers:[
		   {
		    address: "103,Chitrakoot Apartments,Model Colony, Shivajinagar, Pune, Maharashtra 411053",  /* You can change your address from here */
		     html: "<b>Address</b>: <br>103,Chitrakoot,Chatushringi Road,Model Colony,Pune,Maharashtra,India 411053",   /* You can change display address text from here */
		     popup: true
		    }
		    ]
		    });


	});

})(jQuery);