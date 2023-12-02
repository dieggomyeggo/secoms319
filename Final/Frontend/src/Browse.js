import React, { useState } from "react";
import muscleGroups from "./muscleGroups";
import exerciseTypes from "./exerciseTypes";

const Browse = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [muscleGroup, setMuscleGroup] = useState("Any Muscle Group");
  const [exerciseType, setExerciseType] = useState("");
  const [exerciseName, setExerciseName] = useState("");

  const handleChange = (e) => {
    if (e.target.value == "Olympic Weightlifting")
      setExerciseType("olympic_weightlifting");
    else setExerciseType(e.target.value);
  };

  const getExercises = () => {
    const typeRequest = exerciseType != "" ? `type=${exerciseType}&` : "";
    const muscleRequest =
      muscleGroup != "Any Muscle Group"
        ? `muscle=${muscleGroup.toLowerCase()}&`
        : "";
    const nameRequest = exerciseName != "" ? `name=${exerciseName}` : "";
    const URL =
      "http://localhost:8081/getExercises?" +
      typeRequest +
      muscleRequest +
      nameRequest;
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
          <div className="flex items-center mb-4">
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {exerciseTypes.map((t, i) => {
                return (
                  <li>
                    <input
                      id={`default-radio-${i}`}
                      type="radio"
                      value={t}
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {t}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex">
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-2 focus:ring-blue-500"
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {muscleGroup}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" strokeWidth={2} d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div
              id="dropdown"
              className={`z-10 ${
                showDropdown ? "" : "hidden"
              } bg-white divide-y absolute mt-11 divide-gray-100 rounded-lg shadow w-44`}
            >
              <ul
                className="py-2 text-sm text-gray-700"
                aria-labelledby="dropdown-button"
              >
                {muscleGroups.map((muscle) => {
                  return (
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                        onClick={(e) => {
                          setShowDropdown(false);
                          if (e.target.value == "Olympic Weightlifting")
                            setMuscleGroup("olympic_weightlifting");
                        }}
                      >
                        {muscle}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              id="dropdown-2"
              className={`z-10 ${
                showDropdown ? "" : "hidden"
              } bg-white divide-y absolute mt-11 divide-gray-100 rounded-lg shadow w-44`}
            >
              <ul
                className="py-2 text-sm text-gray-700"
                aria-labelledby="dropdown-button"
              >
                {muscleGroups.map((muscle) => {
                  return (
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                        onClick={() => {
                          setShowDropdown(false);
                          setMuscleGroup(muscle);
                        }}
                      >
                        {muscle}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Exercises..."
                onChange={(e) => setExerciseName(e.target.value)}
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                onClick={getExercises}
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
