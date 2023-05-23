function applyTheme() {
  var body = document.body;
  var toggleInput = document.querySelector(".toggle");
  
  // Appliquer le thème sombre ou clair en fonction de l'état du bouton
  if (toggleInput.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}

function toggleMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");

  // Enregistrer l'état de l'input dans localStorage
  var toggleInput = document.querySelector(".toggle");
  localStorage.setItem("darkModeEnabled", toggleInput.checked);

  applyTheme();
}

function checkDarkMode() {
  var toggleInput = document.querySelector(".toggle");
  var darkModeEnabled = localStorage.getItem("darkModeEnabled");

  // Vérifier si l'état de l'input a été enregistré dans localStorage
  if (darkModeEnabled !== null) {
    toggleInput.checked = darkModeEnabled === "true";
  }

  applyTheme();
}

// Appeler la fonction checkDarkMode() lors du chargement de la page
document.addEventListener("DOMContentLoaded", checkDarkMode);

window.addEventListener("DOMContentLoaded", function() {
  // Appeler la fonction checkDarkMode() lorsque le DOM est prêt
  checkDarkMode();

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
});





