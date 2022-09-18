
$('ul.tabs li').click(function () {
  var tab_id = $(this).attr('href');

  $('ul.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#" + tab_id).addClass('current');
});
var removeClass = true;
$(".services").click(function () {
$(".subnav-custom").toggleClass('active');
removeClass = false;
});

$(".subnav-custom").click(function() {
removeClass = false;
});

$("html").click(function () {
if (removeClass) {
  $(".subnav-custom").removeClass('active');
}
removeClass = true;
});


 
$(document).ready(function(){
  $(".sectiontab").click(function(){
    $(".sectiontab").removeClass("active1");
    $(this).addClass("active1")

  });
});

/* swiper js */

var swiper = new Swiper(".swiperabout", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
    autoplay:{
        delay:3000
    },

    breakpoints:{
      991:{
        slidesPerView:3
      },
      
      767:{
        slidesPerView:2
      },
      100:{
        slidesPerView:1
      }
    }
  });


  var swiper = new Swiper(".servieslider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView:1,
    loop:true,
    autoplay:{
        delay:3000
    }
  });


  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true
  });





  
/* section tab js  */


   





