$(document).ready(function () {
    svg4everybody({});
});

 var navigation = $(".main-nav");
    stickyNav = "stickyNav";
    navLogo = $(".nav-logo");
    visible = "visible";
    header = $('.header').height();
 $(window).scroll(function() {
   if( $(this).scrollTop() > header ) {
    navigation.addClass(stickyNav);
    navLogo.addClass(visible);
  } else {
    navigation.removeClass(stickyNav);
    navLogo.removeClass(visible);
  }
 });


 $('.search-btn').click(function() {
     $('.search-block').show("slow");
     $('.search-block').addClass('active');
 });
 $('.btn-close').click(function() {
     $('.search-block').hide("slow");
     $('.search-block').removeClass('active');
 });

//45.035649, 41.963319"//
function initMap() {
  var center = {lat: 45.035722, lng: 41.965360 };
  var uluru = {lat: 45.035421, lng: 41.963319};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: center
  });
  var marker = new google.maps.Marker({
    position: uluru,
    icon: '/static/img/general/marker--loc.png',
    map: map
  });
}

new WOW().init();

var animate = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
animate.init();
