const navbarToggleButton = document.getElementById("navbar-toggle-button")
const navbarMenuItems = document.getElementById("navbar-menu-items")


// menuButton.addEventListener('click', function () {
//     let classList = document.getElementById('nav').classList
//     classList.toggle('hidden')
//     classList.toggle('block')
//   })
navbarToggleButton.addEventListener("click", () => {
    console.log("TEST")
    navbarMenuItems.classList.toggle("hidden")

})