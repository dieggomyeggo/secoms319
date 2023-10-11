const navbarToggleButton = document.getElementById("navbar-toggle-button");

navbarToggleButton.addEventListener("click", function () {
  let classList = document.getElementById("navbar-menu-items").classList;
  classList.toggle("hidden");
  classList.toggle("block");
});

const fetchWorkouts = async () => {
  return await fetch("./workouts.json").then((res) => res.json());
};

const workouts = await fetchWorkouts();

workouts.forEach((category, i) => {
  console.log(i);
  console.log(category);
  const section = document.getElementById(`${i}`);
  category.forEach((workout) => {
    const div = document.createElement("div");
    const a = document.createElement("a");
    const video = document.createElement("video");
    const heading = document.createElement("h5");

    heading.textContent = workout.name;
    video.src = workout.video;
    a.appendChild(video);

    div.appendChild(a);
    div.appendChild(heading);

    workout.steps.forEach((step) => {
      const p = document.createElement("p");
      p.textContent = step;
      div.appendChild(p);
    });

    div.className =
      "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";

    section.appendChild(div);
  });
});
