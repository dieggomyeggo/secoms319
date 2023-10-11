const navbarToggleButton = document.getElementById("navbar-toggle-button")
const navbarMenuItems = document.getElementById("navbar-menu-items")

const workouts = document.getElementById("workouts");

menuButton.addEventListener('click', function () {
    let classList = document.getElementById('nav').classList
    classList.toggle('hidden')
    classList.toggle('block')
})

const fetchWorkouts = async () => {
    return await fetch("./workouts.json")
        .then(res => res.json())
}

const [push, pull, legs] = await fetchWorkouts()


// workouts.appendChild();
