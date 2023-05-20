window.addEventListener("scroll", function() {
  var block = document.querySelector(".block");
  var chain = document.querySelector(".chain");
  var logo = document.querySelector(".hlogo");
  var banner = document.querySelector(".banner")

  var scrollPosition = window.scrollY;
  var bannerHgith = banner.scrollHeight

  block.style.transform = "translateX(" + (-scrollPosition) + "px)";
  block.style.opacity =  1-scrollPosition/500
  chain.style.transform = "translateX(" + scrollPosition + "px)";
  chain.style.opacity =  1-scrollPosition/500

});

function toggleMode() {
  var body = document.body;
  body.classList.toggle("dark-mode"); // Ajoute ou supprime la classe 'dark-mode'

  var modeBtn = document.getElementById("modeBtn");
  if (body.classList.contains("dark-mode")) {
    modeBtn.textContent = "Mode Jour";
  } else {
    modeBtn.textContent = "Mode Nuit";
  }
}


