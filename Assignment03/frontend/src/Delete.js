import { useState } from 'react'
import { deleteProduct } from './apiRequests'

const Delete = ({ products }) => {
  const [id, setId] = useState('')
  return (
    <div>
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

      {products
        .filter((product) => {
          return product.id == id
        })
        .map((product) => {
          return (
            <div
              className="col-span-2 bg-gray-800 rounded-2xl "
              hidden={id === ''}
            >
              <h2 className="p-8 text-4xl align-center font-extrabold tracking-tight leading-none text-gray-100 md:text-5l lg:text-xl">
                {product.title}
              </h2>
              <img
                className="w-64 rounded-lg px-8"
                src={product.image}
                alt={product.title}
              />
              <p className="px-8 text-gray-50">Price: {product.price}</p>
              <p className="px-8 text-gray-50">Rating: {product.rating.rate}</p>
              <p className="px-8 text-gray-50">ID: {product.id}</p>
              <p className="px-8 text-gray-50">{product.description}</p>
              <button
                className="mx-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  deleteProduct(product.id)
                  setId('')
                }}
              >
                Delete
              </button>
            </div>
          )
        })}
    </div>
  )
}

export default Delete
