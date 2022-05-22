$(function(){
    $('html,body').animate({ scrollTop: 0 }, '1');
    setTimeout(function(){
        $("body,html").animate({scrollTop:$(".main").position().top}, 800, "swing");
    }, 1800);
});

document.querySelector(".scroll-top").addEventListener("click", function(){
    $("body,html").animate({scrollTop:$("body").position().top}, 800, "swing");
});

document.querySelector(".return-top").addEventListener("click", function(){
    window.location = window.location.origin;
});