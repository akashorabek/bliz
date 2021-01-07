$(document).ready(function() {
    $(".set > a").on("click", function(event) {
        event.preventDefault();
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".content")
          .slideUp(200);
        $(".set > a i")
          .removeClass("active")
      } else {
        $(".set > a i")
          .removeClass("active")
        $(this)
          .find("i")
          .addClass("active");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
          .siblings(".content")
          .slideDown(200);
      }
    });

    $('.header__top__item').click(function(){
      $(this).find('.dropdown__items').fadeToggle(200);
    });

    $('.goods__nav__opener').click(function(){
      $('.goods__nav.goods').toggleClass('active');
      $('.goods__nav.equipment').removeClass('active');
    });

    $('.equipment__opener').click(function(){
      $('.goods__nav.equipment').toggleClass('active');
      $('.goods__nav.goods').removeClass('active');
    });

    $('.cabinet_config_opener').click(function(){
      $('.goods__nav.config').toggleClass('active');
    });

    $('.show_num').click(function(){
      $('.hidden_num').show();
      $(this).hide();
    });

    $('.filter__item__form a').click(function(event){
      event.preventDefault();
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });

    $('.open_calc_modal').click(function(){
      $('.modal__calculator').addClass('active');
      $('body').addClass('modal-window-calc');
    });

    $('.close__calc__modal').click(function(){
      $('.modal__calculator').removeClass('active');
      $('body').removeClass('modal-window-calc');
    });

    $('.pink').click(function(){
      $('.modal__upgrade_to_top').addClass('active');
    });
    $('.modal__upgrade_to_top__inner i').click(function(){
      $('.modal__upgrade_to_top').removeClass('active');
    });

  });
  
  
