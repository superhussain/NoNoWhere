(function ($) {
  jQuery(document).ready(function ($) {
    nav();
    scroll();
  });
})(jQuery);

nav = function() {
  $(window).on('scroll', function() {
    $('.navbar').removeClass('no-stick').addClass('sticky-nav').addClass('stuck');
  });

  var $logo = $('.logo');
  $logo.click(function(e) {
    $('body,html').animate({
      scrollTop: "0"
    }, 500);
    e.preventDefault();
  });
}

scroll = function () {
  $(".scroll").click(function (event) { // When a link with the .scroll class is clicked
    event.preventDefault(); // Prevent the default action from occurring
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500); // Animate the scroll to this link's href value
  });
}
