//PCでホバーした時の処理　戻る時の動きは無し
$(".l-header__list").hover(function () {
  if ($(this).children(".p-dropdown__menu").css("display") == "none") {
    $(this).children(".p-dropdown__menu").slideDown("fast");
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
//spでアコーディオンメニューが開いた時の処理　戻る時の動きなし
$(".accordion").hover(function () {
  $(this).children(".accordion-title").toggleClass("open");
  if ($(this).children(".accordion-body").css("display") == "none") {
    $(this).children(".accordion-body").stop().slideToggle("fast");
  } else {
    $(this).children(".accordion-body").hide();
  }
});
