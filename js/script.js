$(document).ready(function () {
  $(".slideshow").slick({
    fade: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    infinite: true,
  });
});

// ハンバーガーメニュー
const menu = document.querySelector("#menu");

const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");

  // navがactiveというクラス名を持っているかによる分岐処理
  if (nav.classList.contains("active")) {
    menu.textContent = "close";
  } else {
    menu.textContent = "menu";
  }
});

// コピーライト西暦取得
const copyYear = document.querySelector("#year");
const now = new Date();
copyYear.textContent = now.getFullYear();
