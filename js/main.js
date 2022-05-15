
$(document).ready(function(){
    $('.rivew-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true
      });
      $('.team-slider-wrapper').slick({
        dots: true,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        adaptiveHeight: true
      });
});
