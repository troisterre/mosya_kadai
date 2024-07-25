//PCでホバーした時の処理　戻る時の動きは無し
$(".l-header__list").hover(function () {
  if ($(this).children(".p-dropdown__menu").css("display") == "none") {
    $(this).children(".p-dropdown__menu").slideDown("fast");
  } else {
    $(this).children(".p-dropdown__menu").hide();
  }
});
//tablet&sp メニュー開いた時の処理
$(".hamburger").on("click", function () {
  $(".hamburger").toggleClass("active");
  $(".p-hamburger__menu").toggleClass("open");
  $(".p-hamburger__menu").slideToggle("fast");
});

$(window).resize(function () {
  $(".hamburger").removeClass("active");
  $(".p-hamburger__menu").removeClass("open");
  $(".p-hamburger__menu").slideUp();
});
//spでアコーディオンメニューが開いた時の処理　戻る時の動きなし
$(".accordion").hover(function () {
  //accordion-titleがhoverした時
  if ($(this).children(".p-hamburger__body").css("display") == "none") {
    $(this).children(".accordion-title").addClass("open"); //accordion-titleのプラスマイナスの処理
    $(this).children(".p-hamburger__body").addClass("open"); //accordion-menuにopenクラスを加える
    $(this).children(".p-hamburger__body").css("display", "block");
  } else {
    $(this).children(".accordion-title").removeClass("open"); //accordion-titleのプラスマイナス処理
    $(this).children(".p-hamburger__body").hide(); //hoverが外れた時の隠す処理
  }
});
