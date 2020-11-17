//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
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
