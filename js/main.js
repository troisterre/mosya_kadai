$(".hamburger").on("click", function () {
  $(".hamburger").toggleClass("active");
  $(".p-hamburger__menu").toggleClass("open");
  $(".p-hamburger__menu").slideToggle(500);
});

$(".accordion-title").on("click", function () {
  $(this).toggleClass("open");
  $(this).next().slideToggle();
});

$(".l-header__list").hover(function () {
  $(this).children(".p-dropdown__menu").stop().slideToggle(500);
});
