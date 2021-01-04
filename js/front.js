$(function() {

    // ---------------------------------------------- //
    // Navbar
    // ---------------------------------------------- //

    // ensures that the nav bar will remain there even if it is being scrolled down
    $(document).scroll(function() {
        if ($(window).scrollTop() >= $('header').offset().top) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    // ---------------------------------------------- //
    // Scroll Spy
    // ---------------------------------------------- //

    $('body').scrollspy({
        target: '.navbar',
        offset: 70
    });

    // ---------------------------------------------- //
    // Preventing URL update on navigation link click
    // ---------------------------------------------- //

    $('.navbar-nav a, #scroll-down').bind('click', function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    // when clicking the logo
    $('.navbar-brand, #scroll-down').bind('click', function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    // when refreshed will push webpage to the top
    $(window).on('unload', function() {
        $(window).scrollTop(0);
    });

    // not working
    $(document).ready(function() {
        $("li.dropdown ul.dropdown-menu li").click(function(event) {
            event.toElement.parentElement.click();
        });
    });

});