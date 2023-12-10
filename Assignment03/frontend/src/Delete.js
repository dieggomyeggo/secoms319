import { useState } from 'react'

const Delete = () => {
  const [id, setId] = useState('')
  return (
    <div >
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-first-name"
      >
        ID to Delete
      </label>
      <input
        className={`col-auto appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        id="grid-id"
        type="text"
        placeholder="ID for the product you wish to delete"
        onChange={(e) => setId(e.target.value)}
      />

      <div hidden={id == ''} className="rounded-2xl text-center">
        <img className="rounded-lg " src={''} alt="ph1" />
      </div>
      <div className="col-span-2 bg-gray-800 rounded-2xl " hidden={id == ''}>
        <h2 className="p-8 text-4xl align-center font-extrabold tracking-tight leading-none text-gray-100 md:text-5l lg:text-xl ">
          Placeholder title
        </h2>
        <p className="pl-8">Placeholder description</p>
        <p className="pl-8">Placeholder price</p>
      </div>
    </div>
  )
}

export default Delete
