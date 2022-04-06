$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-button banner-section__slider-prev" type="button"><img src="images/banner-slider-arrow-prev.svg" alt="Previous Arrow" class="banner-section__slider-prev-img"></button>',
    nextArrow:
      '<button class="banner-section__slider-button banner-section__slider-next" type="button"><img src="images/banner-slider-arrow-next.svg" alt="Next Arrow" class="banner-section__slider-next-img"></button>',
  });

  $(".search__tabs-item").on("click", function (e) {
    e.preventDefault();
    $(".search__tabs-item").removeClass("search__tabs-item--active");
    $(".search__content-item").removeClass("search__content-item--active");
    $(this).addClass("search__tabs-item--active");
    $($(this).attr("href")).addClass("search__content-item--active");
  });
});
