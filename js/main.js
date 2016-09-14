$(document).ready(function() {
   $('button.contact').on('click',function(e){
    $( ".contactus" ).slideToggle( "slow", function() {
    // Animation complete.
    });
   });
});