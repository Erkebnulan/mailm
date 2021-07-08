//show menu
$('.call-menu').click(function (){
    $(this).toggleClass('active');
    $('.collapse-menu').toggleClass('show');
    $('.header').toggleClass('menu-open');
    if($(window).width() < 500 && $('.collapse-menu').hasClass('show')) {
        $('body').addClass('scroll-locked');
    } else if($(window).width() < 500 && !$('.collapse-menu').hasClass('show')) {
        $('body').removeClass('scroll-locked');
    }
});

//search-form
$('.search-btn').click(function (){
    $(this).closest('.header-search').addClass('open');
})
$('.search-close').click(function (){
    $(this).closest('.header-search').removeClass('open');
})

//scroll top
$('.scroll-top').click(function (){
    $('html').animate({scrollTop: 0}, 500);
})

//change-mode
$('.switch-mode').click(function (){
    $('body').toggleClass('dark-mode')
})

//fixed header on mobile devices
// var header = $('header'),
//     scrollPrev = 0;
//
// $(window).scroll(function() {
//     var scrolled = $(window).scrollTop();
//
//     if (scrolled > 100 && scrolled > scrollPrev ) {
//         header.addClass('out');
//     } else {
//         header.removeClass('out');
//     }
//     scrollPrev = scrolled;
// });


