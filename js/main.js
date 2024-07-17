//PCでホバーした時の処理
$(".l-header__list").hover(function () {
  if ($(this).children(".p-dropdown__menu").css("display") == "none") {
    $(this).children(".p-dropdown__menu").slideDown(200);
  } else {
    $(this).children(".p-dropdown__menu").hide();
  }
});

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
