import './App.css'
import About from './About'
import Read from './Read'

import { useEffect, useState } from 'react'
import { getAllProducts } from './apiRequests.js'
import Create from './Create'
import Delete from './Delete'
import Update from './Update'

function App() {
  const [page, setPage] = useState('read')
  const [products, setProducts] = useState([])

  useEffect(() => {
    page === 'read' && getAllProducts(setProducts)
  }, [page])

  return (
    <div>
      <nav className="sticky top-0 bg-gray-100 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Product Catalog
          </span>
          <div className="w-full md:block md:w-auto" id="navbar-menu-items">
            <ul
              className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent"
              id="nav-items-list"
            >
              <li>
                <span
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer"
                  onClick={() => setPage('read')}
                >
                  Read
                </span>
              </li>
              <li>
                <span
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer"
                  onClick={() => setPage('create')}
                >
                  Create
                </span>
              </li>
              <li>
                <span
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer"
                  onClick={() => setPage('delete')}
                >
                  Delete
                </span>
              </li>
              <li>
                <span
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer"
                  onClick={() => setPage('update')}
                >
                  Update
                </span>
              </li>
              <li>
                <span
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:cursor-pointer"
                  onClick={() => setPage('about')}
                >
                  Student Information
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* {page === "browse" && <Browse user={user} setUser={setUser} />} */}
        {/* {page === "my-workouts" && <Workouts user={user} setUser={setUser} />} */}
        {/* {page === "login-register" && ( */}
        {/* <Login user={user} setUser={setUser} setPage={setPage} /> */}
        {/* )} */}
        {page === 'about' && <About />}
        {page === 'read' && <Read products={products} />}
        {page === 'create' && <Create setPage={setPage} />}
        {page === 'delete' && <Delete />}
        {page === 'update' && <Update />}
      </div>
    </div>
  )
}

export default App
