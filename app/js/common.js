$(function() {

	$('.slick-slider').slick({
		dots: true,
		adaptiveHeight: true
	});

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
		$('.top-menu__nav').toggleClass("top-menu__nav--active");
	});


	$(".top-menu__nav__link--pseudo").click(function(){
		$('.dropdown-holder').toggleClass("dropdown-holder--active");
	});

	$(".dropdown__link--with-drop").click(function(){
		$(this).next('.double-dropdown-holder').toggleClass("double-dropdown-holder--active");
	});
});