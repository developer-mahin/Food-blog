$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      dots:true,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,

   });
   $(window).scroll(function(){
      var x = $(window).scrollTop();
      if(x > 200){
         $(".top").show();
      }else{
         $(".top").hide();
      }
   })
 });