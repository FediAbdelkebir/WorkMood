( function ($, elementor) {
	"use strict";


    var Buildbench = {

        init: function () {
            
            var widgets = {
				'buildbench-project.default': Buildbench.Project_filter_mixcontent,
				'buildbench-testimonial.default': Buildbench.Testimonial,
				'buildbench-slider.default': Buildbench.Feature_slider,
				'buildbench-team.default': Buildbench.Team_member,
				'buildbench-funfact.default': Buildbench.Funfact,
		          
            };
            $.each(widgets, function (widget, callback) {
                elementor.hooks.addAction('frontend/element_ready/' + widget, callback);
            });
           
      },
      
      Funfact: function ($scope){
         /*==========================================================
            funfact 
         ============================================================*/
         var skl = true;
         $('.single-funfact').on('appear', function () {
            if (skl) {
               $('.funfact-title').each(function () {
                  var $this = $(this);
                  jQuery({
                     Counter: 0
                  }).animate({
                     Counter: $this.attr('data-counter')
                  }, {
                     duration: 8000,
                     easing: 'swing',
                     step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 99999) {
                           while (/(\d+)(\d{3})/.test(num)) {
                              num = num.replace(/(\d+)(\d{3})/, '');
                           }
                        }
                        $this.html(num);
                     }
                  });
               });
               skl = false;
            }
         });

      },
       
      Project_filter_mixcontent: function ($scope) {

         var $container = $scope.find('#mixcontent');
         
         $container.mixItUp({
            animation: {
                effects: 'fade translateX(50%)',
                reverseOut: true,
                duration: 1000
            },
            load: {
                filter: 'all'
            }
        });																									
		
      },
      
      Testimonial:function($scope){
         var $container = $scope.find('.testimonial-carousel');
         $container.owlCarousel({

            loop: true,
            autoplay: false,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            slideSpeed: 500,
            navText: ["<i class='icon icon-chevron-left'></i>", "<i class='icon icon-chevron-right'></i>"],
            items: 1,
            responsive: {
               0: {
                  items: 1
               },
               600: {
                  items: 1
               },
               1000: {
                  items: 1,
               }
            }
      
         });
      },

      Feature_slider:function($scope){
         var $container = $scope.find('.features-slider, features-slider-classic');
         var controls = null;
         var autoplay = false;
         var slider_nav_show = true;
         if($container.attr('data-controlsbox')){
            var controls = JSON.parse($container.attr('data-controlsbox'));
            autoplay = controls.slide_autoplay=="yes"?true:false;
            slider_nav_show = controls.slider_nav_show=="yes"?true:false;
         }
       
    
     
         $container.owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 2000,
            dots: slider_nav_show,
            nav: slider_nav_show,
            navText: ["<i class='icon icon-chevron-left'></i>", "<i class='icon icon-chevron-right'></i>"],

            autoplay: autoplay,
            mouseDrag: true,
            responsive: {
               0: {
                  nav: slider_nav_show,
                  mouseDrag: false,
                  touchDrag:false,
               },
               600: {
                  nav: slider_nav_show,
                  mouseDrag: false,
                  touchDrag:false,
         
               },
               1000: {
                  nav: slider_nav_show,
                  mouseDrag: true,
                  touchDrag:true,
         
               }
            }
         });

         /*==========================================================
         banner slider Classic
         ============================================================*/
         var $container_classic = $scope.find('.features-slider-classic');
        
         var controls_cls = null;
         var autoplay_cls = false;
         var slider_nav_show_cls = false;
         if($container_classic.attr('data-controlsbox')){

         controls_cls = JSON.parse($container_classic.attr('data-controlsbox'));
               autoplay_cls = controls_cls.slide_autoplay=="yes"?true:false;
               slider_nav_show_cls = controls_cls.slider_nav_show=="yes"?true:false;
         }
      
         $container_classic.owlCarousel({
         items: 1,
         loop: true,
         smartSpeed: 2000,
         dots: slider_nav_show_cls,
         nav: slider_nav_show_cls,
         navText: ["<i class='icon icon-chevron-left'></i>", "<i class='icon icon-chevron-right'></i>"],

         autoplay: autoplay_cls,
         mouseDrag: true,
         responsive: {
            0: {
               nav: slider_nav_show_cls,
               mouseDrag: false,
               touchDrag:false,
            },
            600: {
               nav: slider_nav_show_cls,
               mouseDrag: false,
               touchDrag:false,

            },
            1000: {
               nav: slider_nav_show_cls,
               mouseDrag: true,
               touchDrag:true,

            }
         }
      });
      

      }, 


      Team_member:function($scope){
         
         var $container = $scope.find('#ts-team-slider');
         var member_count =  parseInt($container.data('numofteam'));
       
         if ($container.length > 0) {

            $container.owlCarousel({
               nav: false,
               items: member_count || 1,
               loop: true,
               reponsiveClass: true,
               navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"],

               dots: true,
               responsive: {
                  // breakpoint from 0 up
                  0: {
                        items: 1,
                  },
                  // breakpoint from 480 up
                  480: {
                     items: member_count<2?1:2,
                  },
                  // breakpoint from 768 up
                  768: {
                        items: member_count<3?1:3,
                  },
                  // breakpoint from 768 up
                  1200: {
                        items: member_count || 1,
                  }
               }
            });
         }


      }
		
	
    };
    $(window).on('elementor/frontend/init', Buildbench.init);
}(jQuery, window.elementorFrontend) ); 