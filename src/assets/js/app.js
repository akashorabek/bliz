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
  });
  
