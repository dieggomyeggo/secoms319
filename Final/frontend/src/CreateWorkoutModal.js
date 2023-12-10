import React, { useState } from "react";
import { createWorkout } from "./apiRequests";

const CreateWorkoutModal = ({
  setCreateWorkoutModal,
  workouts,
  user,
  setUser,
}) => {
  const [workoutName, setWorkoutName] = useState("");

  const handleClick = () => {

    createWorkout(user, setUser, workoutName);
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 p-4"
            >
              Workout Name
            </label>
            <div className="mt-2">
              <input
                id="workout_name"
                name="name"
                type="name"
                autoComplete="name"
                required
                className="block w-full rounded-lg border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  setWorkoutName(e.target.value);
                }}
              />
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 m-4">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto disabled:bg-gray-300"
                disabled={workoutName === ""}
                onClick={() => handleClick()}
              >
                Add
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => setCreateWorkoutModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkoutModal;
