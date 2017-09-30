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

	});

})(jQuery);
