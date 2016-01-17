var map;

var json = [
  {
    "id": 1,
    "title": "Resume/Cover Letter Workshop",
    "long": "43.3408447",
    "lat": "-79.8834387",
    "location": "427 Dundas Street East, Unit 1 Waterdown, ON L0R 2H1",
    "date": "10/16/2014",
    "time": "11:40 AM",
    "desc": "Need help with your resume and cover letter? Learn how to make an effective resume and cover letter by attending this workshop! Please call 905-690-9927 to register."
  },
  {
    "id": 2,
    "title": "Interview Skills Workshop",
    "long": "43.2576357",
    "lat": "-79.84534329999997",
    "location": "427 Dundas Street East, Unit 1 Waterdown, ON",
    "date": "12/10/2014",
    "time": "11:50 AM",
    "desc": "Learn how to prepare effectively for an interview to get the job that you want! Please call The YMCA Employment Services at 905-690-9927 to register."
  },
  {
    "id": 3,
    "title": "Talk with someone about substance use",
    "long": "43.2593878",
    "lat": "-79.87384880000002",
    "location": "196 Wentworth St N, Hamilton, ON",
    "date": "Monday to Friday",
    "time": "9:00 am to 4:30 pm",
    "desc": "We've helped many people understand their substance use and discover a healthier lifestyle. We can help you, too."
   },
  {
    "id": 4,
    "title": "Canada Revenue Agency TIPS",
    "long": "43.259713",
    "lat": "-79.873641",
    "location": "55 Bay St N Hamilton ON",
    "date": "Monday - Friday",
    "time": " 9AM - 5PM ",
    "desc": "Provides personal and general tax information from the automated Tax Information Phone Service (TIPS). Offers several different services depending on the time of year: * Telerefund * GST/HST credit * Canada Child Tax Benefit (CCTB) * Universal Child Care Benefit (UCCB) * Registered Retirement Savings Plan (RRSP) * Business Information * Tax Free Savings Account (TFSA"
  }
];
var marker, match, longtitude, latitude;
function initialize() {
  var mapOptions = {
    zoom: 12
  };
  map = new google.maps.Map(document.getElementById('map'),
    mapOptions);


  // Try HTML5 geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
        position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'You are here.'
      });

      map.setCenter(pos);
    }, function () {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(43.7739, -79.5019),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);

setTimeout(function () {
  

  for (var x = 0; x < json.length; x++) {
    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + json[x].location + '&sensor=false', null, function (data) {
      var p = data.results[0].geometry.location
      var latlng = new google.maps.LatLng(p.lat, p.lng);
      marker = new google.maps.Marker({
        position: latlng,
        map: map
      });
      marker.addListener("click", function (e) {
        latitude = this.position.lat();
        longitude = this.position.lng();
        console.log(latitude + ", " + longitude);
        
        for (var i = 0; i < json.length; i++) {
      //console.log(json[i].title);
      //console.log(json[i]);
            var temp = 0;
    if (json[i].lat == latitude && json[i].long == longitude) {
      //match = json[i];
        temp = i;
        console.log(json[i]);
    }
    
    }

  $('.map .head h1').text(json[temp].title);
  $('.map .head .loc').text(json[temp].location);
  $('.map .head .date').text(json[temp].date);

  $('.map .details h1').text("Details.");
  $('.map .details .desc').text(json[temp].desc);
      });
    });
  };
}, 2000);


