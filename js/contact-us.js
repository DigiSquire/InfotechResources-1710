jQuery(document).ready(function($){
	if( $('.floating-labels').length > 0 ) floatLabels();

	function floatLabels() {
		var inputFields = $('.floating-labels .cd-label').next();
		inputFields.each(function(){
			var singleInput = $(this);
			//check if user is filling one of the form fields
			checkVal(singleInput);
			singleInput.on('change keyup', function(){
				checkVal(singleInput);
			});
		});
	}

	function checkVal(inputField) {
		( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
	}
	 /* Google Map */

         $('#my-address').gMap({
            zoom: 5,
            scrollwheel: true,
            maptype: 'ROADMAP',
            markers:[
            {
            address: "440/1,Chitrakoot Appartments,Chatushringi Road, Model Colony, Shivajinagar, Pune, Maharashtra 411053, India",  /* You can change your address from here */
            html: "<b>Address</b>: <br>103,Chitrakoot,Chatushringi Road,Model Colony, Pune,Maharashtra 411053",   /* You can change display address text from here */
            popup: true
            }
            ]
            });
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
						$('.p-nav').click(function (event) {
							event.preventDefault();
							var name = $(this).data('title');
							window.location = '../infotechHeads/products.html?market=' + name;
						});

});
