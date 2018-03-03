// // // SETUP VARIABLES
// // // =========================================
var authKey = "AIzaSyDB7t1DA46cGDu_RVF1dF9ANTvDXsC5BU4";

// // Search Parameters
// var location = "";


// // // URL Base
var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyBGE6Rq2qmOziS3p3g2ttGRHWzR1ulIAMs&query=" + "2601 + west + oak + st";
queryURL += "?api-key=AIzaSyDB7t1DA46cGDu_RVF1dF9ANTvDXsC5BU4"; 

  // <script type = "text/javascript">




  // $.ajax({
      // url: queryURL,
      // method: "GET"
      var geocoder = new google.maps.Geocoder();
      var address = "new york";
      geocoder.geocode({'address': address}, function(results, status){
        if (status == google.maps.GeocoderStatus.OK) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();
           alert(latitude);
           alert(longitude);
      }
         

          
          })

        // }
 



     //   {
          /* function initMap() {
                  var northridge = {lat: 41.85, lng: -87.65};
                  var hollywood = {lat: 39.79, lng: -86.14};

                  var map = new google.maps.Map(document.getElementById('map'), {
                center: northridge,
                    zoom: 7
                  });

                  var directionsDisplay = new google.maps.DirectionsRenderer({
                map: map
                  });

                  // Set destination, origin and travel mode.
                  var request = {
                destination: hollywood,
                    origin: northridge,
                    travelMode: 'DRIVING'
                  };

                  // Pass the directions request to the directions service.
                  var directionsService = new google.maps.DirectionsService();
                  directionsService.route(request, function(response, status) {
                    if (status == 'OK') {
                // Display the route on the map.
                directionsDisplay.setDirections(response);
              }
                  });
                }

              </script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDB7t1DA46cGDu_RVF1dF9ANTvDXsC5BU4&callback=initMap"
              async defer></script> */
        //}*/}