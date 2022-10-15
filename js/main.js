$(function () {
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH=$('.navbar').innerHeight();
    $('.slider,.carousel-item').height(winH - (upperH + navH));
   
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md').show().css('opacity',1)
        }
        else{
            $('.shuffle-imgs .col-md').hide(),
            $($(this).data('class')).parent().show().css('opacity', 1);
        }
    });

});