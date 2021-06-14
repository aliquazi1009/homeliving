// Tooltip initialization from popper js
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


// Slick slider initialization from slick.min js
// $(document).ready(function(){
//     $('.t_slider').slick({
//         dots: true,
//         infinite: false,
//         speed: 300,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2
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
//   });
  
$(document).ready(function(){
    $('.t_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 1670,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
        {
            breakpoint: 991,
            settings: 
            {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, 
        {
            breakpoint: 850,
            settings: 
            {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: 
            {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 520,
            settings: 
            {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, ]
    });
});