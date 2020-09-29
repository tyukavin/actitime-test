'use strict';

(function (w, d) {

w.addEventListener('load', function () {

	var $paginationBTNS;
	
	let slider = new Siema({
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
		onInit: () => {
			printSlideIndex.call(this);
		},
		onChange: () => {
			printSlideIndex.call(this);
		},
	});


	Siema.prototype.addPagination = function() {
		const dots = d.createElement('div');
        dots.classList.add('dots');
        this.selector.appendChild(dots);
        for (let i = 0; i < this.innerElements.length; i++) {
          const btn = d.createElement('div');
          btn.classList.add('dot');
          btn.addEventListener('click', () => this.goTo(i));
          dots.appendChild(btn);
        }
        $paginationBTNS = $siemaPagination.querySelectorAll('.dot');
	}

	function printSlideIndex() {
        const SIEMA_CURRENT = this.currentSlide;

        if ($paginationBTNS) {
          let paginationBTNS = Array.prototype.slice.call($paginationBTNS)
          paginationBTNS
            .forEach(btn => {
              btn.classList.remove('is-active');
            });
          paginationBTNS[SIEMA_CURRENT].classList.add('is-active');
        }
        
        this.innerElements.forEach((slide, i) => {
          const addOrRemove = i === this.currentSlide ? 'add' : 'remove';
          this.innerElements[i].classList[addOrRemove]('show');
        });
      }

	slider.addPagination();


});

})(window, document);