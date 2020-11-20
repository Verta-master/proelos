//Mobile menu
$('.top__menubtn').click(function() {
  $('.menu').addClass('menu--opened');
  $('.overlay').addClass('overlay--opened');
})

$('.menu__close').click(function() {
  $('.menu').removeClass('menu--opened');
  $('.overlay').removeClass('overlay--opened');
})

$('.overlay').click(function() {
  $('.menu').removeClass('menu--opened');
  $('.overlay').removeClass('overlay--opened');
})

//Faq
$('.faq__item:first-child .faq__answer').slideDown();
$('.faq__title').click(function() {
  $(this).next().slideToggle();
})

//Btns
$('.service__btn').click(function() {
  $('.service__dropdown').slideToggle();
});

$('.complex__more').click(function() {
  $(this).hide();
  $('.complex__item:nth-child(n + 4)').slideToggle();
});

if (window.innerWidth > 1140) {
  $('.review__more').click(function() {
    $(this).hide();
    $('.review__item:nth-child(n + 5)').slideToggle();
  });
}

if (window.innerWidth < 1140) {
  $('.review__more').click(function() {
    $(this).hide();
    $('.review__item:nth-child(n + 4)').slideToggle();
  });
}

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

//Scroll to menu anchor
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $('.menu__item a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $('.menu').removeClass('menu--opened');
    $('.overlay').removeClass('overlay--opened');
    $(document).off("scroll");

//    $('.menu__item a').each(function () {
//      $(this).removeClass('menu__link--active');
//    })
//    $(this).addClass('menu__link--active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.menu__link').each(function () {
    event.preventDefault();
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.menu__link').removeClass("menu__link--active");
      currLink.addClass("menu__link--active");
    }
  });
};
