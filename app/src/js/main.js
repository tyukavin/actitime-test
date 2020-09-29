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
	});

});

})(window, document);