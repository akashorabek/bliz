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
      $('.goods__nav').toggleClass('active');
    });

    $('.show_num').click(function(){
      $('.hidden_num').show();
      $(this).hide();
    });

    $('.filter__item__form a').click(function(){
      $(this).addClass('active');
      $('.filter__item__form a').not(this).removeClass('active');
    });

  });
  
  
