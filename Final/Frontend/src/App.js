import { useState } from "react";
import Browse from "./Browse";
import Login from "./Login";

function App() {
  const [page, setPage] = useState("browse");

  return (
    <div>
      <nav className="sticky top-0 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            MuscleMapper
          </span>
          {/* <button
            id="navbar-toggle-button"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
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
                <span
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer"
                  onClick={() => setPage("login-register")}
                >
                  Login / Register
                </span>
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
