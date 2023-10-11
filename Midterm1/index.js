const navbarToggleButton = document.getElementById("navbar-toggle-button")

navbarToggleButton.addEventListener('click', function () {
    let classList = document.getElementById('navbar-menu-items').classList
    classList.toggle('hidden')
    classList.toggle('block')
})

const fetchWorkouts = async () => {
    return await fetch("./workouts.json")
        .then(res => res.json())
}

// const [push, pull, legs] = await fetchWorkouts()

// const createSections = (...arg) => {
// arg.forEach((element))
// }

// createSections(push, pull, legs)
// const section = document.createElement("section")
// // workouts.appendChild();

// ["Push", "Pull", "Legs"].forEach(element => {
//     console.log(element)
// });

const workouts = await fetchWorkouts();

workouts.forEach((section, i) => {
    console.log(i)
    console.log(section)
})