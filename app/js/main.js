$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-button banner-section__slider-prev" type="button"><img src="images/banner-slider-arrow-prev.svg" alt="Previous Arrow" class="banner-section__slider-prev-img"></button>',
    nextArrow:
      '<button class="banner-section__slider-button banner-section__slider-next" type="button"><img src="images/banner-slider-arrow-next.svg" alt="Next Arrow" class="banner-section__slider-next-img"></button>',
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass("tab--active");
    $($(this).parent().siblings().find("div")).removeClass(
      "tabs-content--active"
    );
    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");
  });

  $(".product-item__favourites").on("click", function () {
    $(this).toggleClass("product-item__favourites--active");
  });

  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="products__slider-button products__slider-prev" type="button"><img src="images/products-slider-arrow-prev.svg" alt="prev Arrow" class="products__slider-prev-img"></button>',
    nextArrow:
      '<button class="products__slider-button products__slider-next" type="button"><img src="images/products-slider-arrow-next.svg" alt="Next Arrow" class="products__slider-next-img"></button>',
  });

  $(".filter-style").styler();

  $(".filter__item-drop, .filter__btn-extra").on("click", function () {
    $(this).toggleClass("filter__item-drop--active");
    $(this).next().slideToggle("200");
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
  });

  $(".catalog__fiter-btngrid").on("click", function () {
    $(this).addClass("catalog__filter-display--active");
    $(".catalog__fiter-btnline").removeClass("catalog__filter-display--active");
    $(".product-item").removeClass("product-item--list");
  });
  $(".catalog__fiter-btnline").on("click", function () {
    $(this).addClass("catalog__filter-display--active");
    $(".catalog__fiter-btngrid").removeClass("catalog__filter-display--active");
    $(".product-item").addClass("product-item--list");
  });
});
