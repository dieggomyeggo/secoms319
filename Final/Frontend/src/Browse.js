import React, { useState } from "react";

const exerciseTypeOptions = [
  { name: "Any Exercise Type", id: "" },
  { name: "Cardio", id: "cardio" },
  { name: "Olympic Weightlifting", id: "olympic_weightlifting" },
  { name: "Plyometrics", id: "plyometrics" },
  { name: "Powerlifting", id: "powerlifting" },
  { name: "Strength", id: "strength" },
  { name: "Stretching", id: "stretching" },
  { name: "Strongman", id: "strongman" },
];

const muscleGroupOptions = [
  { name: "Any Muscle Group", id: "" },
  { name: "Abdominals", id: "abdominals" },
  { name: "Adductors", id: "adductors" },
  { name: "Biceps", id: "biceps" },
  { name: "Calves", id: "calves" },
  { name: "Chest", id: "chest" },
  { name: "Forearms", id: "forearms" },
  { name: "Glutes", id: "glutes" },
  { name: "Hamstrings", id: "hamstrings" },
  { name: "Lats", id: "lats" },
  { name: "Lower back", id: "lower_back" },
  { name: "Middle back", id: "middle_back" },
  { name: "Neck", id: "neck" },
  { name: "Quadriceps", id: "quadriceps" },
  { name: "Traps", id: "traps" },
  { name: "Triceps", id: "triceps" },
];

const Browse = () => {
  const [exerciseType, setExerciseType] = useState(exerciseTypeOptions[0].id);
  const [muscleGroup, setMuscleGroup] = useState(muscleGroupOptions[0].id);
  const [exerciseName, setExerciseName] = useState("");

  const searchExercises = (event) => {
    event.preventDefault();

    const URL = `http://localhost:8081/getExercises?type=${exerciseType}&muscle=${muscleGroup}&name=${exerciseName}`;
    console.log(URL);
    fetch(URL)
      .then((r) => r.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="mt-4 p-8 bg-gray-800 rounded-2xl">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl ">
          Explore exercises and develop workout plans.
        </h1>
        <p className="text-lg font-normal text-gray-400 lg:text-xl ">
          There are hundreds, if not thousands of different exercises a person
          can do in the gym for their specific muscle groups. Couple that with
          the fact that there are hundreds of millions of combinations of these
          exercises, which can be overwhelming for beginners. We wish to take
          that away, simplifying workout planning for every level of lifter.
        </p>
      </div>
      <div className="mt-6">
        <form>
          <div className="flex">
            <select
              className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-2 focus:ring-blue-500"
              type="button"
              onChange={(e) => {
                setExerciseType(e.target.value);
              }}
            >
              {exerciseTypeOptions.map(({ name, id }, i) => (
                <option value={id}>{name}</option>
              ))}
            </select>

            <select
              className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 border-s-0 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500"
              type="button"
              onChange={(e) => {
                setMuscleGroup(e.target.value);
              }}
            >
              {muscleGroupOptions.map(({ name, id }, i) => (
                <option value={id}>{name}</option>
              ))}
            </select>

            <div className="relative w-full">
              <input
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Exercises..."
                onChange={(e) => setExerciseName(e.target.value)}
              />
              <button
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                onClick={searchExercises}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Browse;
