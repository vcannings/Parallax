$(document).ready(function(){

        if(scrollPercent > 0.0588) {
            $("#headerImage").fadeOut(800);
        }
        
        if(scrollPercent < 0.0588) {
            $("#headerImage").fadeIn(400);
        }
        
   
    
});