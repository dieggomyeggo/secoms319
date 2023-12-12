import { useState } from 'react';
import { deleteWorkout } from './apiRequests';
import CreateWorkoutModal from './CreateWorkoutModal';
const Workouts = ({ user, setUser }) => {
  const { workouts } = user;
  const [createWorkoutModal, setCreateWorkoutModal] = useState(false);

  const handleDelete = (id) => {
    const newUser = structuredClone(user);
    newUser.workouts = newUser.workouts.filter(
      (workout) => workout._id !== id
    );
    setUser(newUser);
    deleteWorkout(user, setUser, id);
  };
  return (
    <div>
      <div className="flex-auto mb-4">
        <p className="text-5xl font-bold mb-2">My Workouts</p>
        <p className="text-gray-700">
          Welcome to "My Workouts" – your dedicated space for transforming
          fitness dreams into reality. Whether you're a beginner or a seasoned
          athlete, this is where your personal goals, routines, and progress
          come together in a uniquely tailored experience. Discover workouts
          that align perfectly with your fitness goals. From high-intensity
          interval training to calming yoga sessions, create routines that fit
          your schedule and preferences.
        </p>
      </div>
      <ul className="divide-y divide-gray-300">
        {workouts.map((workout, i) => {
          if (typeof workout != 'string')
            return (
              <li className="py-4">
                <div className="flex justify-between gap-x-6 mb-2">
                  <div className="min-w-0 flex-auto">
                    <p className="text-2xl">{workout.name}</p>
                  </div>
                  <div className="shrink-0 flex flex-row items-center ">
                    <button
                      className="bg-slate-200 hover:bg-slate-300 rounded-md flex gap-x-1 p-1"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(workout._id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                      Delete workout
                    </button>
                  </div>
                </div>

                <div className="relative overflow-x-auto border-gray-200 border drop-shadow-sm rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Exercise
                        </th>
                        <th scope="col" className="px-6 py-3 w-40">
                          Sets
                        </th>
                        <th scope="col" className="px-6 py-3 w-40">
                          Reps
                        </th>
                        <th scope="col" className="pl-6 py-3 w-40">
                          Weight
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {workout.exercises.map((exercise, j) => (
                        <tr className="bg-white border-b table-fixed">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {exercise.name}
                          </th>
                          <td className="px-6 ">
                            <input
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              type="number"
                              defaultValue={exercise.sets}
                              onChange={(e) => {
                                if (isNaN(e.target.value)) return;
                                const newUser = structuredClone(user);
                                newUser.workouts[i].exercises[j].sets =
                                  Number.parseInt(e.target.value);
                                setUser(newUser);
                              }}
                            ></input>
                          </td>
                          <td className="px-6">
                            <input
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              type="number"
                              defaultValue={exercise.reps}
                              onChange={(e) => {
                                if (isNaN(e.target.value)) return;
                                const newUser = structuredClone(user);
                                newUser.workouts[i].exercises[j].reps =
                                  Number.parseInt(e.target.value);
                                setUser(newUser);
                              }}
                            ></input>
                          </td>
                          <td className="px-6">
                            <input
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              type="number"
                              defaultValue={exercise.weight}
                              onChange={(e) => {
                                if (isNaN(e.target.value)) return;
                                const newUser = structuredClone(user);
                                newUser.workouts[i].exercises[j].weight =
                                  Number.parseInt(e.target.value);
                                setUser(newUser);
                              }}
                            ></input>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
            );
        })}
      </ul>
      <div className="shrink-0 flex flex-row items-center ">
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded-md flex gap-x-1 p-1"
          onClick={() => setCreateWorkoutModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Add Workout
        </button>
      </div>
      {createWorkoutModal && (
        <CreateWorkoutModal
          setCreateWorkoutModal={setCreateWorkoutModal}
          user={user}
          setUser={setUser}
        />
      )}
    </div>
  );
};

export default Workouts;
