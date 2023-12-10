const Delete = () => {
  return (
    <div>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-first-name"
      >
        ID
      </label>
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        id="grid-id"
        type="text"
        placeholder="ID for the product you wish to delete"
      />

    </div>
  )

}

export default Delete
