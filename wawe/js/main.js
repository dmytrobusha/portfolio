$(function(){
  
  $(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
      $('.header__top').addClass('scroll');
    }
    else {
      $('.header__top').removeClass('scroll')
    }
  });

  $(".menu a, .logo, .footer__logo").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке  
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
  });

  $('.blog__sliders').slick({
    dots: true,
    arrows: false
  });
  
  $('.header__btn, .menu a').on('click', function(){
    $('.menu').toggleClass('menu--active');
  });
  
  var mixer = mixitup('.gallery__content');

});