const navbarToggleButton = document.getElementById("navbar-toggle-button");

navbarToggleButton.addEventListener("click", function () {
  let classList = document.getElementById("navbar-menu-items").classList;
  classList.toggle("hidden");
  classList.toggle("block");
});
