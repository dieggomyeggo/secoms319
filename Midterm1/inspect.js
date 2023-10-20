const navbarToggleButton = document.getElementById("navbar-toggle-button");

navbarToggleButton.addEventListener("click", function () {
  let classList = document.getElementById("navbar-menu-items").classList;
  classList.toggle("hidden");
  classList.toggle("block");
});

const workouts = await fetch("./workouts.json").then((res) => res.json());

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const workout = workouts.flat().find((workout) => workout.id == id);

const nameElement = document.getElementById("workout-name");
nameElement.textContent = workout.name;

const videoElement = document.getElementById("workout-video");
console.log(workout.video);
videoElement.src = workout.video;

const workoutSteps = document.getElementById("workout-steps");

workout.steps.forEach((step) => {
  const li = document.createElement("li");
  li.textContent = step;
  workoutSteps.appendChild(li);
});
