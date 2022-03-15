$(document).ready(function () {
	$(window).scroll(function() {
		if (this.scrollY > 20) {
			$('.navbar').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
		}

		if (this.scrollY > 500) {
			$('.scroll-up-btn').addClass('show');
		} else {
			$('.scroll-up-btn').removeClass('show');
		}
	});
	$('.scroll-up-btn').click(function() {
		$('html').animate({ scrollTop: 0 });
		$('html').css('scrollBehavior', 'auto');
	});

	$('.navbar .menu li a').click(function() {
		$('html').css('scrollBehavior', 'smooth');
	});
	$('.menu-btn').click(function() {
		$('.navbar .menu').toggleClass('active');
		$('.menu-btn i').toggleClass('active');
    });
});

const link = document.querySelectorAll('.scroll');
link.forEach((item) => {
	item.addEventListener('click', () => {
		const element = document.getElementById(item.getAttribute('data-link'));
		element.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
});

var typed = new Typed('.typing', {
    strings: [
        'Web Developer.',
        'UX Designer.',
        'Product Designer.',
        'Visual Designer.',
        'Freelancer.'
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

var preloader = document.getElementById('loading');
function myFunction() { 
    preloader.style.display = 'none';
};

AOS.init({
	offset: 200,
	duration: 1000,
	mirror: true
});