$(window).on("load", function(){
    const io = new IntersectionObserver(function(entry){
        if(entry[0].isIntersecting){
            entry[0].target.classList.add("smoothed");
        }       
    });
    
    let oneFlex = document.querySelectorAll(".discription-container .center h2");
    oneFlex.forEach(function(val){
        io.observe(val);
    });
});