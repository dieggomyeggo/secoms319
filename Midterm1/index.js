const navbarToggleButton = document.getElementById("navbar-toggle-button");

navbarToggleButton.addEventListener("click", function () {
    let classList = document.getElementById("navbar-menu-items").classList;
    classList.toggle("hidden");
    classList.toggle("block");
});

const workouts = await fetch("./workouts.json").then((res) => res.json());;

workouts.forEach((category, i) => {
    const section = document.getElementById(`${i}`);
    const gridContainer = document.createElement("div");
    gridContainer.className = "grid grid-cols-1 lg:grid-cols-2 gap-4";
    category.forEach((workout) => {
        const card = document.createElement("div");
        card.className =
            "block max-w bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-800 overflow-hidden";

        const video = document.createElement("video");
        video.autoplay = true;
        video.loop = true;
        video.src = workout.video;

        card.appendChild(video);

        const desc = document.createElement("div");
        desc.className = "p-4";

        const heading = document.createElement("h1");
        heading.className =
            "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white";

        heading.textContent = workout.name;
        desc.appendChild(heading);

        const linkToMoreInfo = document.createElement("a");
        linkToMoreInfo.href = `./inspect.html?id=${workout.id}`
        linkToMoreInfo.className = "inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
        linkToMoreInfo.textContent = "More Info >"

        desc.appendChild(linkToMoreInfo);

        card.appendChild(desc);

        gridContainer.appendChild(card);

        section.appendChild(gridContainer);
    });
});
