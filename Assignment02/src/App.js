import { Products } from './Products';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <div className="h-full w-96 fixed left-0 top-0 bottom-0 bg-slate-200">
        <h1>Assignment 2</h1>
        <button onClick={() => console.log("Do something")} className="bg-blue-600 p-4 text-lg text-white rounded-lg hover:bg-blue-500">Checkout</button>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4 ml-96 bg-slate-100">
        {Products.map((product, index) => (
          <div key={index} className="group relative shadow-lg bg-white rounded-lg" >
            <div className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
              <img alt="Product"
                src={product.image}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="flex justify-between p-3">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span style={{ fontSize: '16px', fontWeight: '600' }}>{product.title}</span>
                  </a>
                  <p>Tag - {product.category}</p>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Rating: {product.rating.rate}</p>
              </div>
              <p className="text-sm font-medium text-green-600">${product.price}</p>
            </div>
            <div className="flex justify-center p-3 space-x-3">
              <button className="bg-slate-600 text-white p-3 rounded-md hover:bg-slate-400">+</button>
              <div className="bg-slate-200 rounded-md p-3">0</div>
              <button className="bg-slate-600 text-white p-3 rounded-md hover:bg-slate-400">-</button>
            </div>
          </div >
        ))
        }
      </div>
    </div >
  );
}

export default App;
