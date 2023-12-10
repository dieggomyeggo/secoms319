import { useState, useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import Workouts from "./Workouts";
import About from "./About";

function App() {
  const [page, setPage] = useState("browse");
  // TODO login / register to get user object
  const [user, setUser] = useState(null);

  // Fetch user info on page load
  useEffect(() => {
    fetch("http://localhost:8081/getUser?email=test@test")
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  // Mocking
  // const [user, setUser] = useState({
  //   _id: {
  //     $oid: "656cec43890de477ede116cf",
  //   },
  //   email: "test@test.com",
  //   password: "okay@okay.com",
  //   workouts: [
  //     {
  //       name: "Test Workout 1",
  //       exercises: [
  //         {
  //           name: "Bench Press",
  //           sets: 3,
  //           reps: 10,
  //           weight: 135,
  //         },
  //         {
  //           name: "Squat",
  //           sets: 3,
  //           reps: 10,
  //           weight: 135,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Test Workout 2",
  //       exercises: [
  //         {
  //           name: "Bench Press",
  //           sets: 3,
  //           reps: 10,
  //           weight: 135,
  //         },
  //         {
  //           name: "Squat",
  //           sets: 3,
  //           reps: 10,
  //           weight: 135,
  //         },
  //       ],
  //     },
  //   ],
  // });

  // Saves workouts in database when user workouts changes
  useEffect(() => {
    if (!user) return;
    for (let i in user.workouts) {
      console.log(user.workouts[i])
      fetch("http://localhost:8081/updateWorkout/" + user.workouts[i]._id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ exercises: user.workouts[i].exercises }),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const logout = () => {
    setUser(null);
    setPage("browse");
  };

  return (
    <div>
      <nav className="sticky top-0 bg-gray-100 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            MuscleMapper
          </span>
          <div className="w-full md:block md:w-auto" id="navbar-menu-items">
            <ul
              className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent"
              id="nav-items-list"
            >
              <li>
                <span
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer"
                  onClick={() => setPage("browse")}
                >
                  Browse Exercises
                </span>
              </li>
              {user && (
                <li>
                  <span
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer"
                    onClick={() => setPage("my-workouts")}
                  >
                    My Workouts
                  </span>
                </li>
              )}
              <li>
                <span
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer"
                  onClick={() => setPage("about")}
                >
                  Student Information
                </span>
              </li>
              <li>
                {user ? (
                  <span
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer"
                    onClick={() => logout()}
                  >
                    Logout
                  </span>
                ) : (
                  <span
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer"
                    onClick={() => setPage("login-register")}
                  >
                    Login / Register
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {page === "browse" && <Browse user={user} setUser={setUser} />}
        {page === "my-workouts" && <Workouts user={user} setUser={setUser} />}
        {page === "login-register" && (
          <Login user={user} setUser={setUser} setPage={setPage} />
        )}
        {page === "about" && <About />}
      </div>
    </div>
  );
}

export default App;
