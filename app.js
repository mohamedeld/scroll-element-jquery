$(function(){
    'use strict';
    $(".navbar li a").click(function(event){
        event.preventDefault();
        $("html,body").animate({
            scrollTop:$('#'+$(this).data('scroll')).offset().top,
        },1000)
    })
});