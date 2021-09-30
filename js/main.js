$(document).ready(function(){
    $('.logos').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    var $slider_container = $('#products');
    $('#products').slick({
        dots: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: $slider_container,
        infinite: true,
        // Add FontAwesome Class
          prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
          nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      var $slider_section = $('#post');
    $('#post').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows: $slider_section,
        // Add FontAwesome Class
          prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
          nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});

$(document).ready(function() {
    var $slider = $('.slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
    });
    
    $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400
    });  
});