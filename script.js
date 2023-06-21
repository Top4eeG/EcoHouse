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

const card = document.querySelector(".card");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

function handleHover(e) {
	const { clientX, clientY, currentTarget } = e;
	const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

	const horizontal = (clientX - offsetLeft) / clientWidth;
	const vertical = (clientY - offsetTop) / clientHeight;
	const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
	const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

	card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
	card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
	card.addEventListener("mousemove", handleHover);
	card.addEventListener("mouseleave", resetStyles);
}
