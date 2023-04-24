const dark = document.querySelector(".dark");
const light = document.querySelector(".light");

dark.addEventListener("click", function () {
  document.querySelector("body").classList.add("darkMode");
  light.classList.remove("active");
  dark.classList.add("active");
});

light.addEventListener("click", function () {
  document.querySelector("body").classList.remove("darkMode");
  dark.classList.remove("active");
  light.classList.add("active");
});

$(function () {
  $(".browse").on("click", ".price", function () {
    const imgDetail = $(this).parents(".nft").find(".imgDetail");
    imgDetail.stop().slideToggle(300);
  });

  $(".toggleModal").on("click", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
    } else {
      $(this).addClass("open");
    }
    $(".modal").stop().slideToggle();
  });
});
