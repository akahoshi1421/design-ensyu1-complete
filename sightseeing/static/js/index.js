var cnt = 0;
setInterval(()=>{
    if(cnt == 4) cnt = 0;
    resultdot = ""
    for(let i = 0; i < cnt; i++){
        resultdot += ".";
    }
    cnt++;
    $("#loadmsg").text("Loading" + resultdot);
}, 400);

$(window).on("load", ()=>{
    $(".loading").delay(500).fadeOut(1500);
})

$(document).on("mouseover", ".links li", function(){
    $(this).find(".underline").css({
        "width": "120%"
    });
});

$(document).on("mouseleave", ".links li", function(){
    $(this).find(".underline").css({
        "width": "2%"
    });
});

$(document).on('click', ".img", function(){
    $(".imgs img, .imgs .img-bg").addClass("move");
    setTimeout(()=>{
        //$(".imgs img, .imgs .img-bg").removeClass("move");
        let where = $(this).attr("where");
        $(`a[href='${where}']`)[0].click();
        
    }, 1500);
});

const options = {
    root: document.querySelector(".news-list"),
    threshold: 0
}


$(window).on("load", function(){
    const io = new IntersectionObserver(function(entries){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                $(".news-list").addClass("page-bottom");
            }       
            else{
                $(".news-list").removeClass("page-bottom");
            }
        })
    }, options)
    
    io.observe(document.querySelector("#last-news"));
});


//スムーズスクロール
$(document).on("click", "a[href^='#']", function(){
    const speed = 300;
    const href = $($(this).attr("href"));
    $("body,html").animate({scrollTop:href.offset().top}, speed, "swing");
    return false;
});