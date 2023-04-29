// $(document).ready(function(){
//     $('.logos').slick({
//         infinite: false,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     infinite: false,
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     infinite: false,
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                 }
//             }
//         ]
//     });

//     var $slider_container = $('#products');
//     $('#products').slick({
//         dots: false,
//         speed: 300,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         appendArrows: $slider_container,
//         infinite: true,
//         // Add FontAwesome Class
//           prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
//           nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//           // You can unslick at a given breakpoint now by adding:
//           // settings: "unslick"
//           // instead of a settings object
//         ]
//       });

//       var $slider_section = $('#post');
//     $('#post').slick({
//         dots: false,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         appendArrows: $slider_section,
//         // Add FontAwesome Class
//           prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
//           nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//           // You can unslick at a given breakpoint now by adding:
//           // settings: "unslick"
//           // instead of a settings object
//         ]
//       });
// });

// $(document).ready(function() {
//     var $slider = $('.slider');
//     var $progressBar = $('.progress');
//     var $progressBarLabel = $( '.slider__label' );
    
//     $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
//       var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
//     $progressBar
//         .css('background-size', calc + '% 100%')
//         .attr('aria-valuenow', calc );
    
//     $progressBarLabel.text( calc + '% completed' );
//     });
    
//     $slider.slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         speed: 400
//     });  
// });

$(document).ready(function(){

  // Range Slider
    if ( $( '[data-slider]' ).length ) {
        $( '[data-slider]' ).slider({});

        $( '#price_slider' ).on( 'slide', function( evt ) {
            $( '#price_slider_value span' ).html( '$' + evt.value[0] + ' - ' + '$' + evt.value[1] );
        });
    }


  // QTY
  if ( $('.quantity').length ) {
        $('.quantity').each(function() {
            var $this = $(this);
            var $qty = $this.find('.qty');
            var $plusBtn = $this.find('#plus-btn');
            var $minusBtn = $this.find('#minus-btn');

            $plusBtn.click(function(evt) {
                evt.preventDefault();
                $qty.val(parseInt($qty.val()) + 1 );
            });
            $minusBtn.click(function(evt) {
                evt.preventDefault();
                $qty.val(parseInt($qty.val()) - 1 );
                if ($qty.val() == 0) {
                    $qty.val(1);
                }
            });
        });
    }

    $('.banner').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 800,
        dots: false,
        arrows: true,
        infinite: true,
        cssEase: 'linear',
        appendArrows: $('#indicator'),
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-left"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-right"></i></button>',
    });

    $('.new-arrival-slide').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 800,
        dots: true,
        arrows: true,
        infinite: true,
        cssEase: 'linear',
        appendArrows: $('#new-arrival-indicator'),
        appendDots: $('#new-arrival-indicator'),
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-left"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: 'unslick',
            }
        ],
    });

    // About us
    $('.about-us-slide').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 800,
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
    });

    //Logo slider
    $('.logos').slick({
        infinite: true,
        dots: false,
        arrows: false,
        speed: 800,
        rtl: false,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});