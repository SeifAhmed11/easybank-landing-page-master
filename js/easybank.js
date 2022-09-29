$(document).ready(function(){
    
    $(".hamburger , .close").on("click", function(){
        $(".items_mobile").slideToggle();
        $(".hamburger").fadeToggle();
        $(".close").fadeToggle();
    });

    $(window).scroll(function(e){
        
            if($(window).scrollTop()+505>=$(".kind").offset().top)
            {
                $(".kind").fadeTo(1000,1);
            }
            
            if($(window).scrollTop()+505>=$(".card_cont").offset().top)
            {
                $(".card_cont").fadeTo(1000,1);
            }
            if($(window).scrollTop()+505>=$(".about").offset().top)
            {
                $(".about").fadeTo(1000,1);
            }
        
    });

    });
