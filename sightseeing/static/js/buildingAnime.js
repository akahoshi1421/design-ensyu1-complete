$(window).on("load", function(){
    const io = new IntersectionObserver(function(entry){
        if(entry[0].isIntersecting){
            entry[0].target.classList.add("slide");
        }       
    });
    
    let oneFlex = document.querySelectorAll(".one-flex");
    oneFlex.forEach(function(val){
        io.observe(val);
    });
});