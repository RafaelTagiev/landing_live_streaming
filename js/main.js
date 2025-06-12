$('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    appendDots: $('.testimonials__dots'),
    responsive: [
    {
      breakpoint: 1250,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
})

$('.testimonials__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
})

$('.testimonials__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
})