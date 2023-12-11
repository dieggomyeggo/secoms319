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
    body: JSON.stringify({...product, image: '../../images/no_image.jpg'})
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
}
export {getAllProducts, createProduct}
