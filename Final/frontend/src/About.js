const About = () => (
  <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
    <div className="p-5 lg:col-span-2 block max-w bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="text-xl text-center font-extrabold">COM S 319</h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside">
        <li>
          <p className="lead text-body-secondary">
            COM S 319: Construction of User Interfaces
          </p>
        </li>
        <li>
          <p className="lead text-body-secondary">Date: December 3, 2023</p>
        </li>
        <li>
          <p className="lead text-body-secondary">Professor: Abraham Aldaco</p>
        </li>
      </ul>
    </div>
    <div className="p-5 block max-w bg-white border border-gray-200 rounded-lg shadow">
      <img
        className="rounded-full w-96 h-96 p-5"
        src={"/static/photoDiego.jpg"}
        alt="diego"
      />

      <p className="text-sm font-semibold leading-6 text-gray-900">
        Diego Perez
      </p>
      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
        joceo@iastate.edu
      </p>
    </div>

    <div className="p-5 block max-w bg-white border border-gray-200 rounded-lg shadow">
      <img
        className="rounded-full w-96 h-96 p-5"
        src={"/static/photoDuba.jpg"}
        alt="duba"
      />

      <p className="text-sm font-semibold leading-6 text-gray-900">
        Jacob Duba
      </p>
      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
        jduba@iastate.edu
      </p>
    </div>
  </div>
);

export default About;
