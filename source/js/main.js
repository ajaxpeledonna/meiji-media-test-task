// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя

$(document).ready(function(){
	$('.header__menu-icon').on('click', function () {
		console.log('test');
		$('.header__menu-wrap').toggleClass('active');
	});
	// $('input[type=tel]')
	// 	.inputmask("8 (999) 999 99 99");


	// $('.js-popup-img')
	// 	.magnificPopup({
	// 		type:'image',
	// 		closeOnContentClick: true,
	// 		fixedContentPos: true,
	// 		mainClass: 'mfp-no-margins mfp-with-zoom',
	// 		image: {
	// 			verticalFit: true
	// 		},
	// 		zoom: {
	// 			enabled: true,
	// 			duration: 300
	// 		}
	// 	});
});
