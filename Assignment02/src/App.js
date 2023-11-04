import { Products } from './Products';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
function App() {
  const [products, setProducts] = useState(Products);
  const [open, setOpen] = useState(false);
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const setCartAmount = (index, amount) => {
    // JSON.parase(JSON.stringify()) is a trick to deep copy an object
    if (amount < 0) return;

    let newProduct = JSON.parse(JSON.stringify(products));
    newProduct[index].amount = amount;
    setProducts(newProduct);
  }

  const [search, setSearch] = useState("");

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <div className="h-full w-96 fixed left-0 top-0 bottom-0 bg-slate-200 p-4">
        <h1 class="text-2xl text-slate-800 font-bold text-center">Assignment 2: Store</h1>
        <input class="bg-slate-300 w-full p-3 text-slate-800 rounded-lg mt-2 mb-2" placeholder='Search this store...' onChange={(input) => { setSearch(input.target.value) }}></input>
        <button onClick={() => setOpen(true)} className="bg-blue-600 p-3 text-lg text-white rounded-lg hover:bg-blue-500 w-full">Checkout</button>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4 ml-96">
        {products.map((product, index) => {
          // TODO: if doesnt match search, don't show
          if (search !== "" && !product.title.toLowerCase().includes(search.toLowerCase())) return null;
          return (
            <div key={index} className="group relative shadow-lg bg-white rounded-lg" >
              <div className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
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
                <button className="bg-slate-600 text-white p-3 rounded-md hover:bg-slate-400" onClick={() => setCartAmount(index, product.amount + 1)}>+</button>
                <div className="bg-slate-200 rounded-md p-3">{product.amount}</div>
                <button className="bg-slate-600 text-white p-3 rounded-md hover:bg-slate-400" onClick={() => setCartAmount(index, product.amount - 1)}>-</button>
              </div>
            </div >
          )
        })
        }
      </div>
    </div >
  );
}

export default App;
