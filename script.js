window.addEventListener("scroll", function() {
  var block = document.querySelector(".block");
  var chain = document.querySelector(".chain");
  var banner = document.querySelector(".banner")

  var scrollPosition = window.scrollY;
  var bannerHgith = banner.scrollHeight

  block.style.transform = "translateX(" + (-scrollPosition) + "px)";
  block.style.opacity =  1-scrollPosition/500
  chain.style.transform = "translateX(" + scrollPosition + "px)";
  chain.style.opacity =  1-scrollPosition/500
});
