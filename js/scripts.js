(function ($) {
  jQuery(document).ready(function ($) {
    scroll();
  });
})(jQuery);

scroll = function () {
  $(".scroll").click(function (event) { // When a link with the .scroll class is clicked
    event.preventDefault(); // Prevent the default action from occurring
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500); // Animate the scroll to this link's href value
  });
}

var data = [
  {
    "id":"01",
    "title":"This is an event",
    "long":"1234",
    "lat":"0987",
    "location":"McMaster Rd."
    "date":"Thursday, January 33rd, 2096"
    "time":"6:00 PM"
    "desc":"This is a description"
  },
  {
    "id":"02",
    "title":"This is an event",
    "long":"1234",
    "lat":"0987",
    "location":"McMaster Rd."
    "date":"Thursday, January 33rd, 2096"
    "time":"6:00 PM"
    "desc":"This is a description"
  },
]
