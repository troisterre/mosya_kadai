$(".hamburger").on("click", function () {
  $(".hamburger").toggleClass("active");
  $(".p-hamburger__menu").toggleClass("active");
  $(".p-hamburger__menu").slideToggle("slow");
});

$(".accordion-title").on("click", function () {
  $(this).toggleClass("open");
  $(this).next().slideToggle();
});

$(".l-header__list").hover(function () {
  $(this).children(".p-dropdown__menu").stop().slideToggle(500);
});
