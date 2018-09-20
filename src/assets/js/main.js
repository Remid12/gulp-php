$(document).ready(function () {
    /* ----------------------- */
    /* VARIABLES DECLARATION */
    /* ----------------------- */
    var $window = $(window);
    var header = $('.header');
    var headerContainer = $('.header-container');
    var headerInner = $('.header > .inner');
    var btnMobile = $('.btn-mobile');
    var userModal = $('.header-user-modal');
    
    /* ----------------------- */
    /* PLUGINS SETUP */
    /* ----------------------- */
    
    var menu = $('.header .header-links');
    var listMenu = menu.children('.menu-item-has-children');
    var isHover = false;
    var delay = 500;
    var leave;
    
    listMenu.mouseenter(function () {
        if ($(this).children('.sub-menu').length > 0 && $window.width() > 860) {

            listMenu.not($(this)).children('.sub-menu').hide();
            listMenu.not($(this)).children('.dropdown').hide();
            isHover = true;
            clearTimeout(leave);
            $(this).children('.sub-menu').fadeIn(200);

        }
    }).mouseleave(function () {
        if ($(this).children('.sub-menu').length > 0 && $window.width() > 860) {

            isHover = false;
            var self = $(this);

            leave = setTimeout(function () {
                if (isHover == false) {
                    self.children('.sub-menu').fadeOut(200);
                }
            }, delay);
        }
    });
	
    /* COOKIE TOOLTIP*/
    const boxCookie = $('.cookie-bar');
    const boxClose = boxCookie.find('.close');

    if (!$.cookie('cookies')) {
        boxCookie.addClass('is-show');
    }
    boxClose.on('click', function () {
        boxCookie.removeClass('is-show');
        $.cookie('cookies', 'yes', { expires: 365 });
    });

    /* ----------------------- */
    /* CLICK EVENTS */
    /* ----------------------- */
    $('.burger-menu').on('click', function(){
        $(this).toggleClass('active');
        $('.header-menu').toggleClass('active');
        $('body, html').toggleClass('no-scroll');
    });
    
    $(".header-menu").click(function(e){
		if($(e.target).hasClass('header-menu')) {
			$('.burger-menu').toggleClass('active');
			$('.header-menu').toggleClass('active');
			$('body, html').toggleClass('no-scroll');
		}
	});
    
    
    /* ----------------------- */
    /* WINDOW EVENTS */
    /* ----------------------- */
    $window.on('resize', function(){
        if($window.width() > 860){
            $('.burger-menu').removeClass('active');
			$('.header-menu').removeClass('active');
			$('body, html').removeClass('no-scroll');
            
            //$('.main').css('margin-top', $('.header').outerHeight());
            $('.header .sub-menu').css('display', 'none');
        }
        else {
            $('.header .sub-menu').css('display', 'block');
        }
    });
    
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
});


/* ----------------------- */
/* FUNCTIONS */
/* ----------------------- */
function hasTouch() {
    return 'ontouchstart' in document.documentElement
       || navigator.maxTouchPoints > 0
       || navigator.msMaxTouchPoints > 0;
}