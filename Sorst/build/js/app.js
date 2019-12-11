"use strict";

$(document).ready(function () {});
$(document).ready(function () {
  $('.js-prod-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    responsive: [{
      breakpoint: 3000,
      settings: "unslick"
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.js-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true
  });
  $('.js-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true
  });
  $('.js-tablet-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    responsive: [{
      breakpoint: 3000,
      settings: "unslick"
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
$(document).ready(function () {
  // $('.js-burger').click( function () {
  // 	$(this).toggleClass('active');
  // 	$('.js-nav').toggleClass('active');
  // 	$('html').toggleClass('overflow');
  // 	$('body').toggleClass('overflow');
  // });
  if (document.querySelector('.js-burger')) {
    $('.js-burger').click(function () {
      if ($(this).hasClass('active')) {
        $('body').removeClass('overflow');
        $(this).removeClass('active');
        $('.js-nav').removeClass('active');
      } else {
        $('body').addClass('overflow');
        $(this).addClass('active');
        $('.js-nav').addClass('active');
      }
    });
  } //lang


  $('.js-lang').click(function () {
    $('.langs').slideToggle('active');
  }); //filter

  $('.js-filter-btn').click(function () {
    $('.js-filter-form').toggleClass('active');
  }); //wow animation

  new WOW().init();
});