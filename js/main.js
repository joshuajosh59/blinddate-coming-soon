(function ($) {

    "use strict";



    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
    });

    /*---------------------------
     MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'http://facebook.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=6d023c55e5', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscribe-form input, .subscribe-form button').fadeOut();
            }
        }
    });

    /*--------------------------------------------------------------
  11. SLDE SLIDER INIT - VEGAS
--------------------------------------------------------------*/

    $(".header-bg").vegas({
        transition: 'fade',
        shuffle: true,
        transitionDuration: 4000,
        delay: 10000,
        animation: 'random',
        animationDuration: 20000,
        loop: true,
        slides: [
            {
                src: "images/slide1.jpg"
                },
            {
                src: "images/slide2.jpg"
                },
            {
                src: "images/slide3.jpg"
                },
            {
                src: "images/slide4.jpg"
                },
            {
                src: "images/slide5.jpg"
                }
      ],
        overlay: 'images/pattern.png'
    });



})(jQuery);