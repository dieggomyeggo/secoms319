const navbarToggleButton = document.getElementById("navbar-toggle-button")
const navbarMenuItems = document.getElementById("navbar-menu-items")

navbarToggleButton.addEventListener("click", () => {
    console.log("TEST")
    navbarMenuItems.classList.toggle("hidden")

})

const fetchWorkouts = async () => {
    return await fetch("./workouts.json")
        .then(res => res.json())
}

const [push, pull, legs] = await fetchWorkouts()


