$(".hamburger").on("click", function () {
  $(".hamburger").toggleClass("active");
  $(".p-hamburger__menu").toggleClass("open");
  $(".p-hamburger__menu").slideToggle(500);
});

$(".accordion").hover(function () {
  $(this).children(".accordion-title").toggleClass("open");
  $(this).children(".accordion-body").stop().slideToggle();
});

$(".l-header__list").hover(function () {
  $(this).children(".p-dropdown__menu").stop().slideToggle(500);
});
