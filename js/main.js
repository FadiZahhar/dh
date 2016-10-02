function reset() {
  $('.lorem').attr('src','images/lorem.png').attr('style','padding-left:0px;padding-top:25px');
  $('.lorem2').remove();  
}
$(document).ready(function() {
   $('button.contact').on('click',function(e){
    $( ".contactus" ).slideToggle( "slow", function() {
    // Animation complete.
    });
   });

   $('img.find').on('click',function(e){
    $('img.find').removeClass('find').addClass('search').attr('src','images/search.png');
    $('.fa-close').show('slow');
   });

   $('.fa-close').on('click',function(e){
    $('img.search').removeClass('search').addClass('find').attr('src','images/find.png');
    $('.fa-close').hide('slow');
   });

  
});