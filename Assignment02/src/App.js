import { Products } from './Products';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Button from '@mui/material/Button'
import { FormHelperText, TextField } from '@mui/material';

function App() {
  const [products, setProducts] = useState(Products);
  const [openCart, setOpenCart] = useState(false);
  const [yipee, setYipee] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(new Map())
  const [total, setTotal] = useState(0)
  const [creditCard, setCreditCard] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [zipCode, setZipCode] = useState("")


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

  const isNumeric = (n) => {
    return !isNaN(n);
  }

  const validateEmail = (input) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return input.match(validRegex);

    }
  

  const resetCart = () => {
    setOpenCart(false);
    clearInfo();
  }

  const setCartAmount = (index, amount) => {
    // JSON.parase(JSON.stringify()) is a trick to deep copy an object
    if (amount < 0) return;

    let newProduct = JSON.parse(JSON.stringify(products));
    newProduct[index].amount = amount;
    setProducts(newProduct);
  }

  const clearInfo = () => {
    setCreditCard("")
    setAddress("")
    setEmail("")
  }



  return (
    <div>
      <Modal
        open={openCart}
        onClose={() => { setOpenCart(false); clearInfo() }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            Products.map((p, i) => {
              if (cart.has(p.title)) {
                return (
                  <div key={i} className="grid grid-cols-3 gap-4 flex-wrap">
                    <Typography >
                      {`x${cart.get(p.title)}`}
                    </Typography>
                    <Typography >
                      {`${p.title} `}
                    </Typography>
                    <Typography >
                      {`${p.price}`}
                    </Typography>
                  </div>
                )
              }
            })
          }
          <div className="grid grid-cols-3 gap-4 flex-wrap">
            <div className="col-span-2" >
              <Typography>
                {`TOTAL(Before tax): `}
              </Typography>
            </div>

            <Typography>
              {`$${total.toFixed(2)}`}
            </Typography>
            <div className="col-span-2" >
              <Typography>
                {`TOTAL(After tax): `}
              </Typography>
            </div>

            <Typography>
              {`$${(total * 1.07).toFixed(2)}`}
            </Typography>
          </div>

          <div style={{ margin: 10 }}>
            <FormControl >
              <TextField
                required
                id="cc-required"
                label="Credit card"
                variant="filled"
                onChange={(e) => { setCreditCard(e.target.value); console.log(creditCard.length) }}
                error={creditCard.length != 0 && (!isNumeric(creditCard) || creditCard.length !== 16)}
              />
              <TextField
                required
                id="email-required"
                label="Email"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
                error = {email.length != 0 && !validateEmail(email)}
              />
              <TextField
                required
                id="address-required"
                label="Street Address"
                variant="filled"
                onChange={(e) => setAddress(e.target.value)}
              />

              <TextField
                required
                id="address-required"
                label="City"
                variant="filled"
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                required
                id="address-required"
                label="State"
                variant="filled"
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                required
                id="address-required"
                label="Zip Code"
                variant="filled"
                onChange={(e) => setZipCode(e.target.value)}
                error={zipCode.length > 0 && (zipCode.length !== 5 || !isNumeric(zipCode))}
              />
            </FormControl>
          </div>
          <div className='grid grid-cols-3'>
            <Button disabled={address == "" || email === "" || creditCard === ""} onClick={() => { setConfirmOrder(true); setOpenCart(false) }} variant="contained">CONFIRM</Button>
            <div />
            <Button onClick={() => resetCart()} variant="contained"> Return </Button>
          </div>
        </Box >
      </Modal >
      <Modal
        open={confirmOrder}
        onClose={() => { clearInfo(); setConfirmOrder(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography> YIPEE</Typography>

          <div className="grid grid-cols-3 gap-4 flex-wrap">
            <div className="col-span-2" >
              <Typography>
                {`TOTAL(After tax): `}
              </Typography>
            </div>

            <Typography>
              {`$${(total * 1.07).toFixed(2)}`}
            </Typography>

          </div>
          <Button onClick={() => { setConfirmOrder(false); setYipee(true) }} variant="contained">ORDER</Button>
        </Box >
      </Modal >
      <Modal
        open={yipee}
        onClose={() => { clearInfo(); setYipee(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align="center">
            YIPEE!
          </Typography>
        </Box>
      </Modal >

      <div className="h-full w-96 fixed left-0 top-0 bottom-0 bg-slate-200 p-4">
        <h1 class="text-2xl text-slate-800 font-bold text-center">Assignment 2: Store</h1>
        <input class="bg-slate-300 w-full p-3 text-slate-800 rounded-lg mt-2 mb-2"
          placeholder='Search this store...' onChange={(input) => {
            setSearch(input.target.value)
          }}></input>
        <button onClick={() => setOpenCart(true)}
          className="bg-blue-600 p-3 text-lg text-white rounded-lg hover:bg-blue-500 w-full">Checkout
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4 ml-96">
        {products.map((product, index) => {
          // TODO: if doesnt match search, don't show
          if (search !== "" && !product.title.toLowerCase().includes(search.toLowerCase())) return null;
          return (
            <div key={index} className="group relative shadow-lg bg-white rounded-lg">
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
                <button className="bg-slate-600 text-white p-3 rounded-md hover:bg-slate-400"
                  onClick={() => {
                    setCartAmount(index, product.amount + 1)
                    const newCart = cart;
                    if (newCart.has(product.title)) {
                      newCart.set(product.title, cart.get(product.title, 0) + 1)
                    } else {
                      newCart.set(product.title, 1)
                    }
                    setTotal(total + product.price)
                    setCart(newCart)
                  }}>
                  +
                </button>
                <div className="bg-slate-200 rounded-md p-3">{product.amount}</div>
                <button className="bg-slate-600 text-white p-3 rounded-md hover:bg-slate-400"
                  onClick={() => {
                    setCartAmount(index, product.amount - 1)
                    const newCart = cart;
                    if (newCart.get(product.title) > 1) {
                      newCart.set(product.title, cart.get(product.title, 0) - 1)
                    } else {
                      newCart.delete(product.title)
                    }
                    setTotal(total > 0 ? total - product.price : 0)
                    setCart(newCart)

                  }
                  }>
                  -
                </button>
              </div>
            </div>
          )
        })
        }
      </div>
    </div >
  );
}

export default App;
