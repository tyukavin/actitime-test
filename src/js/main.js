'use strict';

(function (w, d) {

w.addEventListener('load', function () {

	var btnMenu = d.querySelector('.menu-btn'),
		mobileMenu = d.querySelector('.header__left'),
		mainTitle = d.querySelector('.main__title'),
		mainDesc = d.querySelector('.main__desc'),
		btnMenuInside = d.querySelector('.icon-arrow-mobile'),
		menuInside = d.querySelector('.menu-inside');

	mainTitle.classList.add('is-show');
	mainDesc.classList.add('is-show');

	btnMenu.addEventListener('click', function() {
		this.classList.toggle('is-active');
		mobileMenu.classList.toggle('is-show');
		btnMenuInside.classList.remove('is-active');
		menuInside.classList.remove('is-show');
	});

	btnMenuInside.addEventListener('click', function() {
		this.classList.toggle('is-active');
		menuInside.classList.toggle('is-show');
	});
	
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
		    // when window width is >= 0px
		    0: {
		      	slidesPerView: 1,
		      	slidesPerGroup: 1,
		      	spaceBetween: 20
		    },
		    // when window width is >= 0px
		    992: {
		    	slidesPerView: 1,
		      	slidesPerGroup: 1,
		      	spaceBetween: 0
		    },
		    // when window width is >= 992px
		    1200: {
		      	slidesPerView: 2,
		      	spaceBetween: 150,
				slidesPerGroup: 3,
		    }
		  }
	});


});

})(window, document);