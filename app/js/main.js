$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-button banner-section__slider-prev" type="button"><img src="images/banner-slider-arrow-prev.svg" alt="Previous Arrow" class="banner-section__slider-prev-img"></button>',
    nextArrow:
      '<button class="banner-section__slider-button banner-section__slider-next" type="button"><img src="images/banner-slider-arrow-next.svg" alt="Next Arrow" class="banner-section__slider-next-img"></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass("tab--active");
    $($(this).closest(".tabs-wrapper").siblings().find("div")).removeClass(
      "tabs-content--active"
    );
    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");

    $(".slick-slider").slick("setPosition");
  });

  $(".product-item__favourites").on("click", function () {
    $(this).toggleClass("product-item__favourites--active");
  });
  $(".product-card__favourites").on("click", function () {
    $(this).toggleClass("product-card__favourites--active");
  });

  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="products__slider-button products__slider-prev" type="button"><img src="images/products-slider-arrow-prev.svg" alt="prev Arrow" class="products__slider-prev-img"></button>',
    nextArrow:
      '<button class="products__slider-button products__slider-next" type="button"><img src="images/products-slider-arrow-next.svg" alt="Next Arrow" class="products__slider-next-img"></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
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

  $(".rate-yo").rateYo({
    starWidth: "23px",
    numStars: 5,
    ratedFill: "#1C62CD",
    normalFill: "#C4C4C4",
    spacing: "7px",
  });

  $(".menu__btn").on("click", function () {
    $(".menu-mobile__list").toggleClass("menu-mobile__list--active");
  });

  $(".footer__dropdown-title").on("click", function () {
    $(this).next().slideToggle();
    $(".footer__dropdown-title").toggleClass("footer__dropdown-title--active");
  });

  $(".aside__btn").on("click", function () {
    $(this).next().slideToggle();
  });
});
