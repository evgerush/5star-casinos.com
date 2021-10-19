jQuery(function($) {
    $(window).scroll(function(){
        var distanceTop = $('#alrp-slidebox-anchor').offset().top - $(window).height();
 
        if  ($(window).scrollTop() > distanceTop)
            $('#alrp-slidebox').animate({'right':'0px'},300);
        else
            $('#alrp-slidebox').stop(true).animate({'right':'-430px'},100);
    });
 
    $('#alrp-slidebox .close').bind('click',function(){
        $(this).parent().remove();
    });
});