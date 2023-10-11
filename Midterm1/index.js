const navbarToggleButton = document.getElementById("navbar-toggle-button")

const workouts = document.getElementById("workouts");

navbarToggleButton.addEventListener('click', function () {
    let classList = document.getElementById('navbar-menu-items').classList
    classList.toggle('hidden')
    classList.toggle('block')
})

const fetchWorkouts = async () => {
    return await fetch("./workouts.json")
        .then(res => res.json())
}

const [push, pull, legs] = await fetchWorkouts()


// workouts.appendChild();
