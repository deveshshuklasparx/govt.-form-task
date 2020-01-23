$(document).ready(function(){

	$('#hamburger').click(function(e){
		if($(document).width() < 992){
		e.stopPropagation();
		$(this).toggleClass('open');
		$('.menu').slideToggle('slow')
		}
	});
	$('.dropdown').click(function(e){
	
		e.stopPropagation();
		$('.drop-content').slideToggle('slow')

	});
	

$('.menu').click(function(e){
e.stopPropagation();
});
$('.drop-content').click(function(e){
e.stopPropagation();
})
$(window).scroll(function() {
		if ($(this).scrollTop() > 40){
			$('.header').addClass("bg-color");
		
		
		} else {
			$('.header').removeClass("bg-color");
		
		}
	}),
	 $(".slider-for").slick({
		slidesToShow : 1,
		slidesToScroll : 1,
		arrows : !1,
		dots : !0,
		adaptiveHeight : !0,
		asNavFor : ".slider-nav"
	}), $(".slider-nav").slick({
		slidesToShow : 4,
		slidesToScroll : 1,
		asNavFor : ".slider-for",
		dots : !0,
		adaptiveHeight : !0,
		arrows : !1,
		focusOnSelect : !0
	})
});























