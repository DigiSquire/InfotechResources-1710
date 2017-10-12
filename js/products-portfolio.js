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
		/* Mobile Navigation Hide or Collapse on Click */
		$(document).on('click', '.navbar-collapse.in', function (e) {
			if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
				$(this).collapse('hide');
			}
		});
		// scroll
		$('body').scrollspy({
			target: '.navbar-collapse',
			offset: 195
		});
		// set filter for product page
		$('.p-nav').click(function(event) {
			event.preventDefault();
			var name = $(this).data('title');
			window.location = '../infotechHeads/products.html?market=' + name;
			});
	
		// Custom PortFolio Filtering
		$(window).on('load', function () {
			function loadPageVar(sVar) {
				return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
			};
			var desiredMarket=loadPageVar('market');
			if (desiredMarket != "") {
				$(function () {
					if (desiredMarket=="hospitals"){
						$('#og-grid').mixItUp({
				    load: {
				      filter: '.hospital'
				    }
				  });
					}
					if (desiredMarket=="security"){
						$('#og-grid').mixItUp({
				    load: {
				      filter: '.security'
				    }
				  });
					}
					if (desiredMarket=="industrial"){
						$('#og-grid').mixItUp({
				    load: {
				      filter: '.industrial'
				    }
				  });
					}
				});
			}else {
				$('#og-grid').mixItUp();
			};
		});
		Grid.init(); //Portfolio Grid Expand

	});

})(jQuery);
