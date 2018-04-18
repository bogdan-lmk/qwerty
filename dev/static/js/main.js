$(document).ready(function () {
    svg4everybody({});
});

// var navigation = $(".main-nav");
//     stickyNav = "stickyNav";
//     header = $('.header').height();
//
// $(window).scroll(function() {
//   if( $(this).scrollTop() > header ) {
//     navigation.addClass(stickyNav);
//   } else {
//     navigation.removeClass(stickyNav);
//   }
// });

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    icon: '',
    map: map
  });
}
