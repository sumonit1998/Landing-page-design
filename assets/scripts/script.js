/*
Author       : Shumon Ahammed
Template Name: Gitanjali Code Rhythm - Bootstrap Template
Version      : 1.0
*/

(function($) {
    "use strict";
    // Sidebar
	if($(window).width() <= 991){
        var Sidemenu = function() {
            this.$menuItem = $('.main-nav a');
        };
        
        function init() {
            var $this = Sidemenu;
            $('.main-nav a').on('click', function(e) {
                if($(this).parent().hasClass('has-submenu')) {
                    e.preventDefault();
                }
                if(!$(this).hasClass('submenu')) {
                    $('ul', $(this).parents('ul:first')).slideUp(350);
                    $('a', $(this).parents('ul:first')).removeClass('submenu');
                    $(this).next('ul').slideDown(350);
                    $(this).addClass('submenu');
                } else if($(this).hasClass('submenu')) {
                    $(this).removeClass('submenu');
                    $(this).next('ul').slideUp(350);
                }
            });
        }
        
        // Sidebar Initiate
        init();
        }
	// Mobile menu sidebar overlay
	
	$('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#btn-mobile', function() {
		$('main-wrapper').toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		return false;
	});
	
	$(document).on('click', '.sidebar-overlay', function() {
		$('html').removeClass('menu-opened');
		$(this).removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});
	
	$(document).on('click', '#menu-close', function() {
		$('html').removeClass('menu-opened');
		$('.sidebar-overlay').removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});
})(jQuery);