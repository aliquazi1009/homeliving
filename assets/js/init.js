// Tooltip initialization from popper js
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


// Slick slider initialization from slick.min js
$(document).ready(function(){
    $('.t_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        swipeToSlide: true,
        autoplay: true,
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


// Testimonial Slider Initialization
$(document).ready(function(){
    $('.feedback_slider').slick({
        // slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2670,
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        speed: 500
    });
});



// -------------- On event manupilation js ------------------


// To show/hide the search result in header.
$(document).mouseup(function(e){
    $(".search-input").click(function(){
        $(".search-result").css("display", "block");
    });

    var x = $(".search-result");
    // var y = $(".inner-submenu");
    
    if(!x.is(e.target) && x.has(e.target).length === 0){
        x.hide();
    }
    // if(!y.is(e.target) && y.has(e.target).length === 0){
    //     y.hide();
    // }
});


// To open and close the mobile navbar
$(document).ready(function(){
    $('#mobileNavOpen').click(function(){
        $('.mobile-nav').css("opacity", "1"),
        $('.mobile-nav').css("visibility", "visible"),
        $('.mobile-nav .container').css("margin-left", "0"),
        $('body').css({
            'overflow-y' : 'hidden'
        })

    }),
    $('#mobileNavClose').click(function(){
        $('.mobile-nav').css("opacity", "0"),
        $('.mobile-nav').css("visibility", "hidden"),
        $('.mobile-nav .container').css("margin-left", "-100%"),
        $('body').css({
            'overflow-y' : 'scroll'
        })
    })
})

// Close opened collapse in sidebar

// $(window).click(function(e) {
//     var modal = document.getElementsByClassName("inner-submenu");
//     if (e.target != modal) {
//         $('.inner-submenu').removeClass('show');
//     }
// });