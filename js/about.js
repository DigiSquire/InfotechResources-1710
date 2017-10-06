/*
    Author : DigiSquire Team
    Website : www.digisquite.co
    Support : www.digisquite.co
*/

/*
   Table Of Content

   1. Preloader
   2. Mobile Navigation Hide or Collapse on Click
	 3. Statistics Counter
	 4. Gallery Pop Up Animation
*/

(function ($) {
	'use strict';

	jQuery(document).ready(function () {
		/* Preloader */
		$(window).on('load', function () {
			$('body').addClass('loaded');
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
		// set filter for product page
		$('.p-nav').click(function(event) {
			event.preventDefault();
			var name = $(this).data('title');
			window.location = 'products.html?market=' + name;
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
					//  Gallery Pop Up Animation
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

	});

})(jQuery);
