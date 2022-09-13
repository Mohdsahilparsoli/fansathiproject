
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











/* swiper js */

var swiper = new Swiper(".swiperabout", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView:3,
    loop:true,
    // autoplay:{
    //     delay:500
    // }
  });

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true
  });



