$(function(){
    $('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

    $('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + ' by Marsel Van Oosten';
			}
		}
	});
    $('.gallery__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"> <img src="./assets/images/arrow-left.svg" alt="" > </button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="./assets/images/arrow-right.svg" alt="" > </button>'
    });
	$('.menu__btn').on('click', function() {
		$('.menu__list').toggleClass('menu__list--active')
	});
});