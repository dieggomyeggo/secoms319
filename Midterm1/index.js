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
    const section = document.getElementById(`${i}`);
    const gridContainer = document.createElement("div");
    gridContainer.className = "grid grid-cols-2 gap-4";
    category.forEach((workout) => {
        const card = document.createElement("div");
        const a = document.createElement("a");
        const video = document.createElement("video");
        video.autoplay = true;
        video.loop = true;
        const heading = document.createElement("h1");
        heading.className =
            "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white";

        heading.textContent = workout.name;
        video.src = workout.video;
        a.appendChild(video);

        card.appendChild(a);
        card.appendChild(heading);

        workout.steps.forEach((step) => {
            const p = document.createElement("p");
            p.textContent = step;
            p.className =
                "mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ";
            card.appendChild(p);
        });
        card.className =
            "block max-w  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray";
        gridContainer.appendChild(card);

        section.appendChild(gridContainer);
    });
});
