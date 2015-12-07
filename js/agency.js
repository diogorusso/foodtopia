/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// FIX SIDE on SCROLL -> D!

 var sideTop = $('.sidebar_page').offset().top-111;
 var sideTop = $('.sidebar_page').offset().top+500;

      $(window).scroll(function() {
          if ($(window).scrollTop() > sideTop) {
              $('.sidebar_page').addClass('side-sticky');
          }
          else {
              $('.sidebar_page').removeClass('side-sticky');
          }

          if($(window).scrollTop() > sideBottom){ //scroll size
            $('.sidebar_page').removeClass('side-sticky');
          }
      });
