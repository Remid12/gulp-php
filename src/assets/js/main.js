$(document).ready(function () {
    /* ----------------------- */
    /* VARIABLES DECLARATION */
    /* ----------------------- */
    const $window = $(window);
    const header = $('.header');
    var headerContainer = $('.header-container');
	const mobileBreakPoint = 1024;
	
    /* ----------------------- */
    /* CLICK EVENTS */
    /* ----------------------- */
	displayBurgerMenu();
   
    
    /* ----------------------- */
    /* WINDOW EVENTS */
    /* ----------------------- */
    $window.on('resize', function(){
        if($window.width() > mobileBreakPoint){
            $('.header').removeClass('active');
			$('body, html').removeClass('no-scroll');
		}
    });
	
	$window.on('scroll', function(){
		var wPos = $window.scrollTop();
//		var transitionPos = $('.intro-box').offset().top -220;
		
		if(wPos > 50){
			header.addClass('header--bg-white');
		}
		else {
			header.removeClass('header--bg-white');
		}
	});
	
	/* ----------------------- */
    /* PLUGINS SETUP */
    /* ----------------------- */
	initCookieBar();
	inview();
    preventMobileHover();
	initSliders();
	initDropdowns();
});


/* ----------------------- */
/* FUNCTIONS */
/* ----------------------- */
function hasTouch(){
    return 'ontouchstart' in document.documentElement
       || navigator.maxTouchPoints > 0
       || navigator.msMaxTouchPoints > 0;
}

function preventMobileHover(){
	// REMOVE HOVER ANIMATION ON TOUCH
    if (hasTouch()) {
        try {
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }
}

function inview(){
	inView('[data-inview], [class*="anim--"]').on('enter', function(el){
		el.classList.add('in-view');
	});
	inView.offset(160);
}

function initCookieBar(){
	/* COOKIE TOOLTIP*/
    const boxCookie = $('.cookie-bar');
    const boxClose = boxCookie.find('.close');

    if (!$.cookie('cookies')) {
        boxCookie.addClass('is-visible');
    }
    boxClose.on('click', function () {
        boxCookie.removeClass('is-visible');
        $.cookie('cookies', 'yes', { expires: 365 });
    });
}

function initSliders(){
	$('[data-trigger="slider"]').flickity({
        pageDots: false,
        contain: true,
		groupCells: true
    });
}

function initDropdowns(){
	$('[data-trigger="dropdown"]').on('click', function(){
		const self = $(this);
		
		self.parent('.dropdown').toggleClass('active');
		self.next('.dropdown-content').slideToggle();
		
		$('[data-trigger="dropdown"]').not(self).parent('.dropdown').removeClass('active');
		$('[data-trigger="dropdown"]').not(self).next('.dropdown-content').slideUp();
	});
}

function displayBurgerMenu(){
	$('.burger-menu').on('click', function(){
        $('.header').toggleClass('active');
        $('body, html').toggleClass('no-scroll');
    });
    
    $(".header-menu").click(function(e){
		if($(e.target).hasClass('header-menu')) {
			$('.header').toggleClass('active');
			$('body, html').toggleClass('no-scroll');
		}
	});
}