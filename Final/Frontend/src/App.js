import { useState } from "react";
import Browse from "./Browse";
import Login from "./Login";

function App() {
  const [page, setPage] = useState("browse");
  const [user, setUser] = useState({ email: "blah" });

  const logout = () => {
    setUser(null);
    setPage("browse");
  };

  return (
    <div>
      <nav className="sticky top-0 bg-gray-100 z-50">
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
              <li>
                <span
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer"
                  onClick={() => setPage("my-workouts")}
                >
                  My Workouts
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
        {page === "browse" && <Browse />}
        {page === "my-workouts" && <p>My workouts</p>}
        {page === "login-register" && <Login />}
      </div>
    </div>
  );
}

export default App;
