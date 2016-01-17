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
    "id": "01",
    "title": "Resume/Cover Letter Workshop",
    "long": "43.341118",
    "lat": "-79.883503",
    "location": "YMCA Employment Services 427 Dundas Street East, Unit 1 Waterdown, ON L0R 2H1",
    "date": "10/16/2014",
    "time": "11:40 AM",
    "desc": "Need help with your resume and cover letter? Learn how to make an effective resume and cover letter by attending this workshop! Please call 905-690-9927 to register.",
  },
  {
    "id": "02",
    "title": "Interview Skills Workshop",
    "long": "43.341118",
    "lat": "-79.883503",
    "location": "YMCA Employment Services 427 Dundas Street East, Unit 1 Waterdown, ON L0R 2H1",
    "date": "12/10/2014",
    "time": "11:50 AM",
    "desc": "Learn how to prepare effectively for an interview to get the job that you want! Please call The YMCA Employment Services at 905-690-9927 to register.",
  },
]
