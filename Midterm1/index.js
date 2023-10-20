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
    gridContainer.className = "grid grid-cols-1 lg:grid-cols-2 gap-4";
    category.forEach((workout) => {
        const card = document.createElement("div");
        card.className =
            "block max-w bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray overflow-hidden";

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

        const ul = document.createElement("ul");
        ul.className = "list-disc list-outside ml-5"

        workout.steps.forEach((step) => {
            const li = document.createElement("li");
            li.textContent = step;
            li.className =
                "text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 ";
            ul.appendChild(li);
        });

        desc.appendChild(ul);

        const linkToMoreInfo = document.createElement("a");
        linkToMoreInfo.href = `./inspect.html?=${workout.id}`;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "mt-4 p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        button.innerText = "More info"

        linkToMoreInfo.appendChild(button)

        desc.appendChild(linkToMoreInfo);

        card.appendChild(desc);

        gridContainer.appendChild(card);

        section.appendChild(gridContainer);
    });
});
