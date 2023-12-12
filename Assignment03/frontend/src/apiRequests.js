const getAllProducts = async (setProducts) =>
  await fetch('http://localhost:8081/listProducts', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => setProducts(data))

const createProduct = async (product, setProducts) => {
  await fetch('http://localhost:8081/addProduct', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ ...product, image: '../../images/no_image.jpg' }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
}

const deleteProduct = async (id) => {
  await fetch('http://localhost:8081/deleteProduct', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  })
}

const updateProductPrice = async (id, price) => {
  await fetch('http://localhost:8081/updatePrice', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ id: id, price: price }),
  })
}

export { getAllProducts, createProduct, deleteProduct, updateProductPrice }
