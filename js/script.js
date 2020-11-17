//Mobile menu
$('.top__menubtn').click(function() {
  $('.menu').addClass('menu--opened');
  $('.overlay').addClass('overlay--opened');
})

$('.menu__close').click(function() {
  $('.menu').removeClass('menu--opened');
  $('.overlay').removeClass('overlay--opened');
})

//Faq
$('.faq__title').click(function() {
  $('.faq__answer').slideUp();
  $(this).next().slideToggle();
})

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
  } else {
    $(".btn-top").fadeOut();
  };
});

$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});
