'use strict';

(function (w, d) {

w.addEventListener('load', function () {
	
	var mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 2,
		spaceBetween: 150,
		slidesPerGroup: 3,
		loop: false,
		pagination: {
			clickable: true,
			el: '.swiper-pagination',
		},
		breakpoints: {
		    // when window width is >= 320px
		    0: {
		      slidesPerView: 1,
		      slidesPerGroup: 1,
		      spaceBetween: 20
		    },
		    // when window width is >= 480px
		    750: {
		      slidesPerView: 3,
		      spaceBetween: 30
		    },
		    // when window width is >= 640px
		    992: {
		      slidesPerView: 4,
		      spaceBetween: 40
		    }
		  }
	});


});

})(window, document);