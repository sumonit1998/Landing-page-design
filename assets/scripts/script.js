/*
Author       : Shumon Ahammed
Template Name: Gitanjali Code Rhythm - Bootstrap Template
Version      : 1.0
*/

(function($) {
    "use strict";

    //sticky header
    // $(window).scroll(function(){
	// 	var scroll = $(window).scrollTop();
    //     if (scroll > 150) {
    //         $(".gcrhythm-header").addClass("gcrhthm-sticky");
            
    //     }
    //     else{
    //         $(".gcrhythm-header").removeClass("gcrhthm-sticky");  	
    //     }
	// })
    $(window).scroll(function() {
        var sticky = $('.gcrhythm-header'),
          scroll = $(window).scrollTop();
    
        if (scroll >= 100) sticky.addClass('gcrhthm-sticky');
        else sticky.removeClass('gcrhthm-sticky');
      });

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

    //course owl carousel
    $('#course-slider').owlCarousel( {
		loop: false,
		margin: 30,
		autoplay: false,
		dots:false,
    nav:true,
		autoplayTimeout: 8500,
		smartSpeed: 3000, 
  	navText: ['',''],
		responsive: {
			0: {
				items: 1,
        nav:true
			},
			768: {
				items: 2,
        nav:true
			},
			1170: {
				items: 3,
        nav:true,
        mouseDrag: false
			}
		}
	});
    // project countdown function 
    var a = 0;
    $(window).scroll(function() {
      var oTop = $('.gcr-counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.gcr-countdown').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
            {
              duration: 5000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
    
            });
        });
        a = 1;
      }
    
    });
    //students review 
    //course owl carousel
    $('#student-review').owlCarousel( {
      loop: true,
      margin: 30,
      autoplay: true,
      dots:false,
      nav:true,
      autoplayTimeout: 8500,
      smartSpeed: 3000, 
      navText: ['',''],
      responsive: {
        0: {
          items: 1,
          nav:true
        },
        768: {
          items: 2,
          nav:true
        },
        1170: {
          items: 3,
          nav:true,
          mouseDrag: false
        }
      }
    });
   
})(jQuery);