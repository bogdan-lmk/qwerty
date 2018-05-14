$(document).ready(function () {
    svg4everybody({});
});

function fun1() {
    var rng=document.querySelector('.range-slider'); //rng - это Input
    var p=document.querySelector('.value'); // p - абзац
    p.innerHTML=rng.value;
}






$('[data-tab]').on('click', function (e) {
  $(this).addClass('active-tab').siblings('[data-tab]').removeClass('active-tab')
  $(this).closest('.item-tabs').closest('.item-row').closest('.item-info-wrap').siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active')
  e.preventDefault()
  $(this).trigger('tabChanged')
})
// $('[data-tab]').on('tabChanged', function(){
//   console.log('changed', $(this).index(),  $(this).index() -1 )
//   var prev = $(this).index() - 1;


// });

$('.language-select').on('click', function(){

    if($('.custom-select').hasClass('closed')){
        setTimeout(function(){
            $('.custom-select').removeClass('closed');
            $('.custom-select').addClass('open');
            $('.arrow-lang').css('transform','rotate(180deg)');
        },100);
    }
    else if($('.custom-select').hasClass('open')){

        $('.custom-select').removeClass('open');
        $('.custom-select').addClass('closed');
        $('.arrow-lang').css('transform','rotate(0deg)');
    }
})

$(window).load(function() {
  $(".comparison-slider").twentytwenty();
});

function showVal(newVal){
  var image = $('.swipe-img');
      totalImages = $(image).length-1;
      maxRange  = $('.range-slider').attr("max",totalImages);
      currentValue = ($('.range-slider').val());
      currentImage = image.eq(currentValue);
      $(currentImage).addClass('is-visible').siblings().removeClass('is-visible');
}
