//@format
import { useState } from 'react'
const Read = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState({ image: null })
  return (
    <div className="grid grid-cols-6 gap-4 justify-center">
      <div className="col-span-6 mt-4 p-8 bg-gray-800 rounded-2xl text-center">
        <h1 className="mb-4 text-4xl align-center font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl ">
          All Products
        </h1>
      </div>
      <div
        hidden={!selectedProduct.image}
        className="col-span-4 rounded-2xl text-center"
      >
        <img
          className="rounded-lg "
          src={selectedProduct.image}
          alt={selectedProduct.title}
        />
      </div>

      <div
        className="col-span-2 bg-gray-800 rounded-2xl "
        hidden={!selectedProduct.image}
      >
        <h2 className="p-8 text-4xl align-center font-extrabold tracking-tight leading-none text-gray-100 md:text-5l lg:text-xl ">
          {selectedProduct ? selectedProduct.title : ''}
        </h2>
        <p className="px-8 text-gray-50 font-bold">
          Price: {selectedProduct ? selectedProduct.price : ''}
        </p>
        <p className="px-8 text-gray-50 font-bold">
          Rating:{' '}
          {selectedProduct && selectedProduct.rating
            ? selectedProduct.rating.rate
            : ''}
        </p>
        <p className="px-8 text-gray-50 font-bold">
          ID: {selectedProduct ? selectedProduct.id : ''}
        </p>
        <p className="px-8 text-gray-50">
          {selectedProduct ? selectedProduct.description : ''}
        </p>
      </div>

      {products.map((product) => {
        return (
          <div className="col-auto ">
            <img
              className="h-auto max-w-full rounded-lg"
              src={product.image}
              alt={product.title}
              onClick={() => setSelectedProduct(product)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Read
