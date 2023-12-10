import { useState } from 'react'

const Update = () => {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div >
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-first-name"
      >
        ID to Update
      </label>
      <input
        className={`col-auto appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        id="grid-id"
        type="text"
        placeholder="ID for the product you wish to update"
        onChange={(e) => setId(e.target.value)}
      />

      <form className="w-full max-w-lg" hidden={id == ''}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Title
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${title == '' ? 'border-red-500' : ''
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-first-name"
              type="text"
              placeholder="Men's T-shirt"
            />
            <p hidden={title != ''} className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Price
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${price == '' ? 'border-red-500' : ''
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-last-name"
              type="text"
              placeholder="$69.00"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-description"
            >
              Description
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${description == '' ? 'border-red-500' : ''
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-description"
              type="description"
              placeholder="A description for your product"
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-category"
            >
              Category
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${category == '' ? 'border-red-500' : ''
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-category"
              type="text"
              placeholder="Men's Clothing"
            />
          </div>
        </div>
        <div className={"flex items-center justify-between"}>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Update Product
          </button>
        </div>
        <div className={`m-4 block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}>
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt="alternative"
          />
        </div>
      </form>

    </div>
  )
}

export default Update
