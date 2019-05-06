$(document).ready(function(){
    // trigger Nice scroll
    
   $("body").niceScroll({
       
       cursorcolor : "#f7600e",
       cursorborder : "none",
       cursorwidth : "8px"
       
   });
          
    // change header height
   
        $(".header").height($(window).height() );
       
       //make div.intro in center of screen
       
        $(".intro").css("paddingTop" , ($(window).height() - $(".intro").height() )/2 );
   
  
   
   // scroll to features
   
   $(".header .arrow i").click(function(){
      
        $("html , body").animate({
            
            scrollTop: $(".features").offset().top
            
        },1000)
       
   });

    // show hidden item from work
    
    $(".show-more").click(function () {
        
        $(".work .hidden").fadeIn(1500);
        
    });
    
    // check tetimonials
    
    var rightArrow = $(".testim .fa-chevron-right"),
        
        leftArrow = $(".testim .fa-chevron-left");
    
    function check() {
      
        $(".client:first").hasClass("active") ? leftArrow.fadeOut() : leftArrow.fadeIn();
        
        $(".client:last").hasClass("active") ? rightArrow.fadeOut() : rightArrow.fadeIn();
        
    }
    
    check();
    
    $(".testim i").click(function (){
        
        if ($(this).hasClass("fa-chevron-right")) {
            
            $(".testim .active").fadeOut(1000 , function () {
                
                $(this).removeClass("active").next(".client").addClass("active").fadeIn();
                
                check();
                
            });
            
        } else {
            
            $(".testim .active").fadeOut(1000 , function () {
                
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
                
                check();
                
            });
            
        }
        
    })
    
});