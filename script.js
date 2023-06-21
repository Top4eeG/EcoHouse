$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$(window).on('load', function() {
	$('.preloader').fadeOut().end().delay(400).fadeOut('slow');
	scaleText1();
	scaleText2()
});

function scaleText1(){
	const name = document.querySelector('.scroll');
	name.addEventListener('mousemove', function (){
		name.classList.add('transform');
	});
	name.addEventListener('mouseleave', function (){
		name.classList.remove('transform');
	});
}

function scaleText2(){
	const name = document.querySelector('.name');
	name.addEventListener('mousemove', function (){
		name.classList.add('transform');
	});
	name.addEventListener('mouseleave', function (){
		name.classList.remove('transform');
	});
}

