$(document).ready(function () {
    svg4everybody({});
});

var navigation = $(".main-nav");
    stickyNav = "stickyNav";
    header = $('.header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > header ) {
    navigation.addClass(stickyNav);
  } else {
    navigation.removeClass(stickyNav);
  }
});
