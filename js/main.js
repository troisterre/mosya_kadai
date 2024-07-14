$(".hamburger").on("click", function () {
  $(".hamburger").toggleClass("active");
  $(".p-hamburger__menu").toggleClass("open");
  $(".p-hamburger__menu").slideToggle();
});
$(window).resize(function () {
  $(".hamburger").removeClass("active");
  $(".p-hamburger__menu").removeClass("open");
  $(".p-hamburger__menu").slideUp();
});
$(".accordion").hover(function () {
  $(this).children(".accordion-title").toggleClass("open");
  $(this).children(".accordion-body").stop().slideToggle();
});

$(".l-header__list").hover(function () {
  $(this).children(".p-dropdown__menu").stop().slideToggle("fast");
});
