'use strict';

(function (w, d) {

w.addEventListener('load', function () {

	console.log('Load!');

	new Siema({
		selector: '.siema',
		duration: 200,
		easing: 'ease-out',
		perPage: 2,
		startIndex: 0,
		draggable: true,
		multipleDrag: true,
		threshold: 20,
		loop: false,
		rtl: false,
		onInit: () => {},
		onChange: () => {},
	});

});

})(window, document);