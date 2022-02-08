$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
        items: 4,
        margin: 30,
        nav: true,
        loop: true,
        dots: true,
        responsive: {
            0:{
                items: 1,
                stagePadding: 20,
                margin: 5
            },
            380:{
                items: 2,
                stagePadding: 10,
                margin: 10
            },
            600:{
                items: 3
            },
            1100:{
                items: 4
            }
    }
    });


    $(document).ready(function() {
        $('.back-reg').click(function() {
            $('.form_reg').removeClass('active-reg');
        });
    });

    $(document).ready(function() {
        $('.log_mobile').click(function() {
            $('.form_login').toggleClass('active');
            $('.burger_menu').removeClass('active-burger')
        });
    });

    $(document).ready(function() {
        $('.reg_mobile').click(function() {
            $('.form_reg').toggleClass('active');
            $('.burger_menu').removeClass('active-burger')
        });
    });

    $(document).ready(function() {
        $('.log').click(function() {
            $('.form_login').toggleClass('active');
        });
    });

    $(document).ready(function() {
        $('.button_back').click(function() {
            $('.form_login').removeClass('active');
        });
    });

    $(document).ready(function() {
        $('.sign').click(function() {
            $('.form_reg').toggleClass('active-reg');
        });
    });


    $(document).ready(function() {
        $('.burger').click(function() {
            $('.burger_menu').toggleClass('active-burger');
        });
    });

    $(document).ready(function() {
        $('.back_mobile').click(function() {
            $('.burger_menu').removeClass('active-burger');
        });
    });
    


});
